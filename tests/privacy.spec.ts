import { test, expect } from '@playwright/test';

test.describe('Privacy Page Navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the privacy page
    await page.goto('/privacy');
  });

  test('should display navigation on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const nav = page.locator('nav');
    await expect(nav).toBeVisible();

    // Check mobile menu button is visible
    const mobileMenuButton = nav.locator('button[aria-label="Toggle menu"]');
    await expect(mobileMenuButton).toBeVisible();
  });

  test('should navigate to home page when clicking main logo on mobile', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const logo = page.locator('nav a[href="/"]');
    await expect(logo).toBeVisible();

    // Click logo and verify navigation to home page
    await logo.click();

    // Wait for navigation and verify URL is the root
    await expect(page).toHaveURL(/.*\/$/);

    // Check that hero section of homepage is visible
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
  });

  test('should navigate to home page about section when clicking About link on mobile', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Open mobile menu
    await page.click('button[aria-label="Toggle menu"]');

    // Wait for menu to be visible
    const mobileMenuDropdown = page.locator('nav .md\\:hidden div').last();
    await expect(mobileMenuDropdown).toBeVisible();

    // Click the About link
    const aboutLink = mobileMenuDropdown.locator('a[href="/#about"]');
    await expect(aboutLink).toBeVisible();
    await aboutLink.click();

    // Verify navigation to home page and hash is correct
    await expect(page).toHaveURL(/.*\/#about/);

    // Check that about section is in viewport
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeInViewport();
  });
});
