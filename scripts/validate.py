#!/usr/bin/env python3
"""Static package and optional provider manifest integrity test. No browser claims."""
from pathlib import Path
import json
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
EXPECTED = [
    "SKILL.md", "design-provider.json", "VERSION", "README.md", "CHANGELOG.md", "EVALS.md", "LICENSE",
    "references/provider-protocol.md", "references/style-selection.md", "references/apple-principles.md",
    "references/component-mapping.md", "references/theme-adaptation.md", "references/framework-compatibility.md",
    "references/upstream-sources.md", "motion/foundations.md", "motion/patterns.md",
    "quality/style-audit.md", "quality/motion-qa.md",
    "examples/motion-gallery/package.json", "examples/motion-gallery/index.html",
    "examples/motion-gallery/src/main.jsx", "examples/motion-gallery/src/App.jsx",
    "examples/motion-gallery/src/styles.css",
    "examples/motion-gallery/src/AdvancedLab.jsx", "examples/motion-gallery/src/advanced.css",
    "motion/advanced-patterns.md",
    "examples/handoffs/style-candidate.yaml", "examples/handoffs/spec.yaml",
    "examples/handoffs/implement.yaml", "examples/handoffs/style-audit.yaml",
]
ALLOWED_CAPABILITIES = {"visual-spec", "component-mapping", "tokens", "themes", "motion",
                        "style-audit", "implementation", "style-candidate"}
ALLOWED_MODES = {"style-candidate", "spec", "implement", "style-audit"}
ALLOWED_LEVELS = {"native", "adapted", "guidance"}
ROUTES = {"NEW_BUILD", "EXISTING_IMPROVE", "EXISTING_REDESIGN", "EXISTING_REBUILD"}


def check(cond, message):
    if not cond:
        raise AssertionError(message)


def run():
    for rel in EXPECTED:
        check((ROOT / rel).is_file(), "missing required file: " + rel)
    manifest = json.loads((ROOT / "design-provider.json").read_text(encoding="utf-8"))
    frontmatter = (ROOT / "SKILL.md").read_text(encoding="utf-8").split("---", 2)[1]
    found = re.search(r"(?m)^name:\s*(.+)\s*$", frontmatter)
    check(bool(found), "SKILL.md name missing")
    check(manifest.get("provider_id") == found.group(1).strip(), "provider ID differs from Skill frontmatter")
    check(manifest.get("entry") == "SKILL.md", "entry must be original SKILL.md")
    check(manifest.get("contract_version") == "1.0", "unsupported protocol version")
    for field in ("design_families", "capabilities", "surfaces"):
        values=manifest.get(field)
        check(isinstance(values,list) and values and all(isinstance(x,str) and x for x in values), "invalid "+field)
        check(len(values)==len(set(values)), "duplicate "+field)
    check(set(manifest["capabilities"]) <= ALLOWED_CAPABILITIES, "unknown provider capability")
    fw = manifest.get("framework_support")
    check(isinstance(fw,list) and fw, "framework support list missing")
    check(len({item["name"] for item in fw}) == len(fw), "duplicate framework")
    check(all(item.get("level") in ALLOWED_LEVELS for item in fw), "invalid framework level")
    check(any(item["name"]=="react" and item["level"]=="native" for item in fw), "React native support missing")
    pkg=json.loads((ROOT/"examples/motion-gallery/package.json").read_text(encoding="utf-8"))
    check("motion" in pkg.get("dependencies",{}), "Motion dependency missing")
    check("react" in pkg.get("dependencies",{}), "React dependency missing")
    app=(ROOT/"examples/motion-gallery/src/App.jsx").read_text(encoding="utf-8")
    patterns=(ROOT/"motion/patterns.md").read_text(encoding="utf-8")
    for i in range(1,17):
        pid=f"P{i:02d}"
        check(re.search(r"\[\""+pid+r"\"\s*,",app) is not None, "gallery missing "+pid)
        check(re.search(r"\|\s*"+pid+r"\s*\|",patterns) is not None, "catalog missing "+pid)
    check(app.count("function ")>=16, "expected real component implementations")
    check("AdvancedLab" in app and "page===\"advanced\"" in app, "advanced gallery route missing")
    advanced=(ROOT/"examples/motion-gallery/src/AdvancedLab.jsx").read_text(encoding="utf-8")
    for marker in ("Master Detail", "Expand in Place", "Global Filter", "Linked Hover", "Sticky Compact Header", "Command Palette"):
        check(marker in advanced, "missing advanced lab: "+marker)
    for page in ("CompactWorkbench", "ProductivityUtility"):
        check(("function "+page+"(") in app, "missing "+page)
    for name in ALLOWED_MODES:
        handoff=(ROOT/"examples/handoffs"/(name+".yaml")).read_text(encoding="utf-8")
        check(("mode: "+name) in handoff, "handoff mode mismatch: "+name)
        check("change_scope: read-only" in handoff if name!="implement" else "writable_paths:" in handoff,
              "scope mismatch: "+name)
        for field in ("provider_id:", "contract_version:", "project_route:", "environment:", "deliverable:"):
            check(field in handoff, "handoff missing "+field+": "+name)
    check("MIT + Commons Clause" in (ROOT/"references/upstream-sources.md").read_text(encoding="utf-8"), "license caution lost")
    print("PASS static provider integrity: manifest, 16 patterns, 4 handoffs, original source and files")
    return 0

if __name__ == "__main__":
    try:
        sys.exit(run())
    except (AssertionError, ValueError, OSError, KeyError) as exc:
        print("FAIL static provider integrity: "+str(exc),file=sys.stderr)
        sys.exit(1)
