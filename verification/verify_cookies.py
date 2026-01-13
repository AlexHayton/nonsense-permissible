
from playwright.sync_api import Page, expect, sync_playwright
import time

def verify_cookies_page(page: Page):
    # Go to home page
    page.goto("http://localhost:3000")

    # Wait for hydration
    page.wait_for_load_state("networkidle")

    # Check that Cookies link exists in Navigation (since we added it)
    cookies_nav_link = page.get_by_role("navigation").get_by_role("link", name="Cookies")
    expect(cookies_nav_link).to_be_visible()

    # Click it
    cookies_nav_link.click()

    # Verify we are on /cookies
    expect(page).to_have_url("http://localhost:3000/cookies")

    # Check content
    expect(page.get_by_role("heading", name="Cookies Policy")).to_be_visible()

    # Take screenshot of Cookies page
    page.screenshot(path="verification/cookies_page.png", full_page=True)

    # Check footer link too
    # Scroll to bottom
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

    # Find Cookies link in footer
    footer = page.locator("footer")
    footer_cookies_link = footer.get_by_role("link", name="Cookies")
    expect(footer_cookies_link).to_be_visible()
    expect(footer_cookies_link).to_have_attribute("href", "/cookies")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_cookies_page(page)
        finally:
            browser.close()
