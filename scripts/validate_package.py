#!/usr/bin/env python3
"""Strict structural, DTCG, reference, contrast, and asset validation for Codex Skill v2.0."""
from pathlib import Path
import sys,re,hashlib,subprocess,math,json
ROOT=Path(sys.argv[1]).resolve() if len(sys.argv)>1 else Path(__file__).resolve().parents[1]
required=['SKILL.md','README.md','VERSION','CHANGELOG.md','EVALS.md','agents/openai.yaml',
 'foundations/design-principles.md','foundations/color-materials.md','foundations/typography.md','foundations/iconography.md','foundations/tokens-and-themes.md',
 'components/catalog.md','components/controls-forms.md','components/data-display.md','components/overlays-advanced.md',
 'patterns/layout-decision-tree.md','patterns/application-shell.md','patterns/responsive-adaptation.md',
 'interaction/motion-system.md','interaction/interaction-contracts.md','interaction/keyboard-accessibility.md',
 'themes/theme-implementation.md','integrations/framework-adoption.md','integrations/external-projects.md','integrations/product-ui-provider.md',
 'quality/acceptance.md','quality/visual-regression.md','quality/anti-template.md',
 'tokens/light.tokens.json','tokens/dark.tokens.json','tokens/density.tokens.json',
 'assets/styles/design-tokens.css','examples/component-gallery/index.html','examples/component-gallery/gallery.css',
 'examples/component-gallery/gallery.js','examples/component-gallery/standalone.html',
 'scripts/generate_css.py','scripts/validate_package.py','scripts/browser_smoke.py','assets/previews/v2-light.png','assets/previews/v2-dark.png']
errors=[]
for filename in required:
 p=ROOT/filename
 if not p.is_file() or not p.stat().st_size:errors.append('missing: '+filename)
if errors:
 print('\n'.join(errors));sys.exit(1)
root_skill=(ROOT/'SKILL.md').read_text()
if not root_skill.startswith('---\nname: apple-inspired-desktop-saas\n'): errors.append('bad frontmatter/name')
if (ROOT/'VERSION').read_text().strip()!='2.0.0':errors.append('version mismatch')
# Ensure all declared literal packaged references exist. Skip folder-only references.
pattern=r'`((?:foundations|components|patterns|interaction|themes|integrations|quality|tokens|examples|assets|scripts)/[a-zA-Z0-9_./-]+\.(?:md|json|css|html|js|py|png))`'
for p in ROOT.rglob('*.md'):
 for asset in re.findall(pattern,p.read_text()):
  if not (ROOT/asset).is_file():errors.append('broken doc reference: '+str(p.relative_to(ROOT))+' -> '+asset)
# Check old business code not accidentally present.
ban=('企业流水','贷前','贷中','风控监测','风险监测平台','银行机构','apple_risk_')
for p in list(ROOT.rglob('*.html'))+list(ROOT.rglob('*.js'))+list(ROOT.rglob('*.css')):
 content=p.read_text()
 if any(w in content for w in ban):errors.append('domain-specific sample: '+str(p.relative_to(ROOT)))
# Local resources in new gallery.
html=(ROOT/'examples/component-gallery/index.html').read_text()
for rel in re.findall(r'(?:src|href)="([^"]+)"',html):
 if rel.startswith(('../','./')) and not (ROOT/'examples/component-gallery'/rel).resolve().is_file():errors.append('bad gallery asset '+rel)
standalone=(ROOT/'examples/component-gallery/standalone.html').read_text()
if '<style>' not in standalone or '<script>' not in standalone or 'src="gallery.js"' in standalone:errors.append('gallery standalone is not truly inlined')
# Independent token compiler should succeed and produce a byte-identical CSS artifact.
cssp=ROOT/'assets/styles/design-tokens.css'
before=cssp.read_bytes()
r=subprocess.run([sys.executable,str(ROOT/'scripts/generate_css.py')],capture_output=True,text=True)
if r.returncode:errors.append('token compilation failed: '+r.stderr.strip())
elif before!=cssp.read_bytes():errors.append('compiled CSS drift; run scripts/generate_css.py and rebuild standalone demo')
if 'var(--ds-surface-panel)' not in (ROOT/'examples/component-gallery/gallery.css').read_text():errors.append('gallery not using semantic tokens')
if '[data-theme="dark"]' not in cssp.read_text():errors.append('dark token CSS missing')
# On-screen normal text contrast on principal surface, both themes.
def rel_lum(rgb):
 c=[int(rgb[i:i+2],16)/255 for i in (1,3,5)]
 c=[v/12.92 if v<=0.04045 else ((v+0.055)/1.055)**2.4 for v in c]
 return .2126*c[0]+.7152*c[1]+.0722*c[2]
def ratio(a,b):
 x,y=sorted([rel_lum(a),rel_lum(b)],reverse=True)
 return (x+.05)/(y+.05)
for theme in ('light','dark'):
 data=json.loads((ROOT/f'tokens/{theme}.tokens.json').read_text())
 def t(path):
  node=data
  for part in path.split('.'):node=node[part]
  v=node['$value']
  if isinstance(v,str) and v.startswith('{'):return t(v[1:-1])
  return v['hex']
 for fg in ('text.primary','text.secondary'):
  bg='surface.panel'
  r=ratio(t('semantic.'+fg),t('semantic.'+bg))
  if r<4.5:errors.append(f'contrast {theme} {fg} on {bg}: {r:.2f}')
 # white button labels on primary action fill
 r=ratio(t('semantic.action.onPrimary'),t('semantic.action.primary'))
 if r<4.5:errors.append(f'contrast {theme} action: {r:.2f}')
 print(f'{theme}: primary text {ratio(t("semantic.text.primary"),t("semantic.surface.panel")):.2f}:1; secondary {ratio(t("semantic.text.secondary"),t("semantic.surface.panel")):.2f}:1; primary button {r:.2f}:1')
# CSS/JS HTML cross-ID minimal check
js=(ROOT/'examples/component-gallery/gallery.js').read_text()
for id in re.findall(r"\$\('([A-Za-z][A-Za-z0-9_-]+)'\)",js):
 if f'id="{id}"' not in html:errors.append('JS DOM id missing in gallery: '+id)
# Legacy malformed v1 token file deliberately removed to avoid conflicting source of truth.
if (ROOT/'assets/tokens/apple-native.tokens.json').exists():errors.append('old non-DTCG v1 token file should be removed')
if (ROOT/'MANIFEST.sha256').exists():
 for row in (ROOT/'MANIFEST.sha256').read_text().splitlines():
  if not row.strip():continue
  hashv,rel=row.split('  ',1);p=ROOT/rel
  if not p.is_file() or hashlib.sha256(p.read_bytes()).hexdigest()!=hashv:errors.append('manifest checksum mismatch '+rel)
print('Structure:',len(required),'required files checked; docs:',len(list(ROOT.rglob('*.md'))),'gallery:',len(standalone),'characters')
if errors:
 print('FAIL ('+str(len(errors))+')')
 for e in errors:print(' - '+e)
 sys.exit(1)
print('PASS: structure, internal references, token compilation, AA contrast, gallery assets, neutral domain, manifest')
