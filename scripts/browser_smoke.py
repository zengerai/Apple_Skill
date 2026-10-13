#!/usr/bin/env python3
"""Optional real browser smoke tests. Requires running Vite dev server, Playwright and Chromium."""
import argparse
from playwright.sync_api import sync_playwright

def run(url):
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        for width in (375, 750, 1024, 1440):
            page = browser.new_page(viewport={"width": width, "height": 900})
            errors = []
            page.on("pageerror", lambda exc: errors.append(str(exc)))
            page.goto(url, wait_until="networkidle")
            assert page.locator("[data-pattern]").count() == 16, "pattern count"
            assert not page.evaluate("document.documentElement.scrollWidth > window.innerWidth + 2"), "overflow at %d" % width
            page.locator('[data-pattern="P01"] button').first.click()
            assert "1 次" in page.locator('[data-pattern="P01"] output').inner_text()
            s = page.locator('[data-pattern="P03"] button')
            for i in range(10):
                s.nth(i%3).click()
            assert s.nth(0).get_attribute("aria-pressed") == "true", "last segment selection"
            page.locator('[data-pattern="P04"] [role=tab]').nth(1).focus()
            page.keyboard.press("ArrowRight")
            assert page.locator('[data-pattern="P04"] [role=tab]').nth(2).get_attribute("aria-selected") == "true"
            page.locator('[data-pattern="P07"] > .demo-body button').first.click()
            assert page.locator("dialog.dialog").evaluate("(el) => el.open"), "dialog open"
            page.keyboard.press("Escape")
            assert not page.locator("dialog.dialog").evaluate("(el) => el.open"), "dialog Escape"
            # v3.1 advanced interaction lab — actual rendered browser behavior
            page.get_by_role("button",name="高级联动",exact=True).click()
            assert page.locator('[data-testid="advanced-gallery"]').count() == 1
            record=page.get_by_role("button",name="海汇商贸 · A02")
            record.click()
            assert "海汇商贸" in page.locator(".adv-detail").inner_text()
            page.get_by_role("button",name="关闭详情").click()
            page.locator(".adv-detail").wait_for(state="detached", timeout=5000)  # wait for AnimatePresence exit
            page.get_by_role("button",name="展开").first.click()
            assert page.get_by_role("button",name="返回").count() == 1
            page.keyboard.press("Escape")
            assert page.get_by_role("button",name="返回").count() == 0
            before=page.locator('[data-testid="advanced-total"]').inner_text()
            page.get_by_label("统计月份").select_option("0")
            assert page.locator('[data-testid="advanced-total"]').inner_text() != before
            page.get_by_label("所属机构").select_option("东部")
            assert page.locator(".adv-table tbody tr").count()==2
            points=page.locator(".adv-graphs>div").first.locator("button")
            points.nth(2).focus()
            assert page.locator(".adv-graphs>div").nth(1).locator("button").nth(2).get_attribute("aria-pressed") == "true"
            scroll=page.locator(".adv-scroll")
            scroll.evaluate("(el) => {el.scrollTop=170;el.dispatchEvent(new Event('scroll',{bubbles:true}))}")
            assert "紧凑" in page.locator(".adv-panel").filter(has_text="Sticky Compact Header").locator("output").inner_text()
            page.get_by_role("button",name="打开命令 ⌘K").click()
            assert page.locator(".adv-dialog").evaluate("(d) => d.open")
            page.get_by_label("搜索命令").fill("企业")
            page.keyboard.press("Enter")
            assert not page.locator(".adv-dialog").evaluate("(d) => d.open")
            page.get_by_role("button",name="紧凑工作台",exact=True).click()
            assert page.locator(".workbench table tbody tr").count() == 4
            page.locator(".search-label input").fill("二季度")
            assert page.locator(".workbench table tbody tr").count() == 1
            page.get_by_role("button",name="轻量工具",exact=True).click()
            assert page.locator("input[type=file]").count()==1
            assert not errors, errors
            print("PASS browser",width,"px; gallery, rapid segment, tabs, modal, search, utility")
            page.close()
        reduced=browser.new_page(reduced_motion="reduce")
        reduced.goto(url,wait_until="networkidle")
        assert reduced.locator(".reduced-note").inner_text().find("开启")>=0, "reduced-motion state"
        reduced.locator('[data-pattern="P02"] input').check()
        assert reduced.locator('[data-pattern="P02"] input').is_checked()
        print("PASS reduced-motion interactive controls")
        reduced.close()
        browser.close()

if __name__=="__main__":
    parser=argparse.ArgumentParser()
    parser.add_argument("--url",default="http://127.0.0.1:5173")
    args=parser.parse_args()
    run(args.url)
