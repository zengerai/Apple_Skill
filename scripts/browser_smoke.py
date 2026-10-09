#!/usr/bin/env python3
"""Optional real-browser smoke test (Playwright installed separately).
Uses the fully inlined gallery so localhost/file:// restrictions are irrelevant.
"""
from pathlib import Path
from shutil import which
ROOT=Path(__file__).resolve().parents[1]
try:
 from playwright.sync_api import sync_playwright
except ImportError:
 raise SystemExit('Playwright missing. Optional test: pip install playwright && playwright install chromium')
html=(ROOT/'examples/component-gallery/standalone.html').read_text()
with sync_playwright() as p:
 browser_binary=which("chromium") or which("google-chrome")
 b=p.chromium.launch(headless=True, executable_path=browser_binary) if browser_binary else p.chromium.launch(headless=True)
 for w in (750,1024,1692,1920,2560):
  page=b.new_page(viewport={'width':w,'height':900})
  errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
  page.set_content(html)
  assert not page.evaluate('document.documentElement.scrollWidth>innerWidth+2')
  page.locator('[data-page="records"]').click()
  assert page.locator('#recordRows tr').count()==6
  page.locator('#searchInput').fill('主题')
  assert page.locator('#recordRows tr').count()==1
  page.locator('#clearButton').click()
  page.locator('#recordRows tr').first.click()
  assert page.locator('#detailsDrawer').is_visible()
  page.keyboard.press('Escape')
  assert page.locator('#detailsDrawer').is_hidden()
  page.locator('[data-page="settings"]').click()
  page.locator('#workspaceName').fill('')
  page.locator('#demoForm button[type=submit]').click()
  assert page.locator('#nameError').is_visible()
  page.locator('#showDialog').click()
  assert page.locator('#confirmDialog').is_visible()
  page.keyboard.press('Escape')
  assert page.locator('#confirmDialog').is_hidden()
  page.locator('#popoverTrigger').click()
  page.locator('[data-theme-option=dark]').click()
  assert page.locator('html').get_attribute('data-theme')=='dark'
  page.locator('#popoverTrigger').click()
  page.locator('[data-density-option=compact]').click()
  assert page.locator('html').get_attribute('data-density')=='compact'
  assert not errors,errors
  print(f'PASS {w}px: navigation, search, overlays, validation, theme, density, no overflow/JS errors')
  page.close()
 page=b.new_page(reduced_motion='reduce')
 page.set_content(html)
 d=page.evaluate('getComputedStyle(document.querySelector(".segment-thumb")).transitionDuration')
 assert d in ('1e-05s','0.00001s','0.01ms'),d
 print('PASS prefers-reduced-motion')
 b.close()
