import { test, expect } from '@playwright/test';

test.describe('Homepage Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage successfully', async ({ page }) => {
    await expect(page.locator('body')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
  });

  test('should display navigation bar', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();

    // Check logo
    const logo = nav.locator('img[alt="Nonsense Permissible"]');
    await expect(logo).toBeVisible();

    // Check navigation links - these may be hidden on mobile
    const aboutLink = nav.locator('a[href="#about"]');
    const workLink = nav.locator('a[href="#work"]');
    const getInTouchButton = nav.locator('button:has-text("Get in Touch")');

    // At least one of these should be visible (desktop nav or mobile menu button)
    const mobileMenuButton = nav.locator('button[aria-label="Toggle menu"]');

    const hasDesktopNav = await aboutLink.isVisible();
    const hasMobileMenu = await mobileMenuButton.isVisible();

    expect(hasDesktopNav || hasMobileMenu).toBeTruthy();
  });

  test('should display hero section', async ({ page }) => {
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();

    // Check hero logo
    const heroLogo = hero.locator('img[alt="Nonsense Permissible"]');
    await expect(heroLogo).toBeVisible();

    // Check hero title
    await expect(hero.locator('h1')).toContainText(
      'Crafting Experiences That Spark Joy'
    );

    // Check hero description
    await expect(hero.locator('p')).toContainText(
      'At Nonsense Permissible, we create web, mobile and XR experiences'
    );

    // Check hero buttons
    await expect(
      hero.locator('button:has-text("View Our Work")')
    ).toBeVisible();
    await expect(hero.locator('button:has-text("Learn More")')).toBeVisible();
  });

  test('should display about section', async ({ page }) => {
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeVisible();
  });

  test('should display featured work section', async ({ page }) => {
    const workSection = page.locator('#work');
    await expect(workSection).toBeVisible();

    // Check section title
    await expect(workSection.locator('h2')).toContainText('Featured Work');

    // Check projects are displayed - look for project cards more specifically
    const projectCards = workSection
      .locator('div[class*="group"]')
      .filter({ hasText: 'View Project' });
    await expect(projectCards).toHaveCount(3);

    // Check specific projects
    await expect(
      workSection.locator('h3:has-text("ValleyDAO Phlo")')
    ).toBeVisible();
    await expect(
      workSection.locator('h3:has-text("Quest Alarm Clock")')
    ).toBeVisible();
    await expect(
      workSection.locator('h3:has-text("Video Dice")')
    ).toBeVisible();
  });

  test('should display contact section', async ({ page }) => {
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();
  });

  test('should display footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Check footer logo
    const footerLogo = footer.locator('img[alt="Nonsense Permissible"]');
    await expect(footerLogo).toBeVisible();

    // Check footer links
    await expect(footer.locator('text=About')).toBeVisible();
    await expect(footer.locator('text=Work')).toBeVisible();
    await expect(footer.locator('text=Contact')).toBeVisible();
    await expect(footer.locator('text=Github')).toBeVisible();
    await expect(footer.locator('text=LinkedIn')).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    // Test About link - try desktop first, then mobile if needed
    const aboutLink = page.locator('nav a[href="#about"]');
    const mobileMenuButton = page.locator('button[aria-label="Toggle menu"]');

    if (await aboutLink.isVisible()) {
      // Desktop navigation
      await aboutLink.click();
      await expect(page.locator('#about')).toBeInViewport();

      // Test Work link
      await page.click('nav a[href="#work"]');
      await expect(page.locator('#work')).toBeInViewport();

      // Test Get in Touch button
      await page.click('nav button:has-text("Get in Touch")');
      await expect(page.locator('#contact')).toBeInViewport();
    } else {
      // Mobile navigation - open menu first
      await mobileMenuButton.click();
      const mobileMenuDropdown = page.locator('nav .md\\:hidden div').last();
      await mobileMenuDropdown.locator('a[href="#about"]').click();
      await expect(page.locator('#about')).toBeInViewport();
    }
  });

  test('should have working hero section buttons', async ({ page }) => {
    // Test View Our Work button
    await page.click('button:has-text("View Our Work")');
    await expect(page.locator('#work')).toBeInViewport();

    // Test Learn More button
    await page.click('button:has-text("Learn More")');
    await expect(page.locator('#about')).toBeInViewport();
  });

  test('should have working footer links', async ({ page }) => {
    // Test internal footer links
    await page.click('footer a[href="#about"]');
    await expect(page.locator('#about')).toBeInViewport();

    await page.click('footer a[href="#work"]');
    await expect(page.locator('#work')).toBeInViewport();

    await page.click('footer a[href="#contact"]');
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('should have external links in footer', async ({ page }) => {
    // Check that external links exist and have correct hrefs
    const githubLink = page.locator(
      'footer a[href="https://github.com/alexhayton"]'
    );
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/alexhayton'
    );

    const linkedinLink = page.locator(
      'footer a[href="https://www.linkedin.com/in/alexhayton/"]'
    );
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/alexhayton/'
    );
  });

  test('should have working project links', async ({ page, context }) => {
    // Test ValleyDAO Phlo project link - only test the one that actually opens
    const phloPromise = context.waitForEvent('page');
    await page.click('text=ValleyDAO Phlo');
    await page.click('button:has-text("View Project")');
    const phloPage = await phloPromise;
    await expect(phloPage.url()).toContain('phlo.valleydao.bio');
    await phloPage.close();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Check mobile menu button is visible
    const mobileMenuButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(mobileMenuButton).toBeVisible();

    // Check desktop navigation is hidden
    const desktopNav = page.locator('nav .hidden.md\\:flex');
    await expect(desktopNav).not.toBeVisible();
  });

  test('should open mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Open mobile menu
    await page.click('button[aria-label="Toggle menu"]');

    // Check mobile menu dropdown is visible
    const mobileMenuDropdown = page.locator('nav .md\\:hidden div').last();
    await expect(mobileMenuDropdown).toBeVisible();

    // Check mobile menu links
    await expect(mobileMenuDropdown.locator('a[href="#about"]')).toBeVisible();
    await expect(mobileMenuDropdown.locator('a[href="#work"]')).toBeVisible();
    await expect(
      mobileMenuDropdown.locator('button:has-text("Get in Touch")')
    ).toBeVisible();
  });

  test('should close mobile menu when clicking links', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Open mobile menu
    await page.click('button[aria-label="Toggle menu"]');

    // Click a link
    const mobileMenuDropdown = page.locator('nav .md\\:hidden div').last();
    await mobileMenuDropdown.locator('a[href="#about"]').click();

    // Check mobile menu dropdown is closed
    await expect(mobileMenuDropdown).not.toBeVisible();

    // Verify navigation worked
    await expect(page.locator('#about')).toBeInViewport();
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    // Check alt text for images
    const images = page.locator('img');
    const imageCount = await images.count();

    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
    }

    // Check aria-label for mobile menu button exists (may not be visible on desktop)
    const mobileMenuButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(mobileMenuButton).toHaveAttribute('aria-label', 'Toggle menu');
  });

  test('should load images correctly', async ({ page }) => {
    // Check that main images load
    const heroImage = page.locator('img[alt="3D Abstract Art"]');
    await expect(heroImage).toBeVisible();

    const projectImages = page.locator('#work img');
    const projectImageCount = await projectImages.count();
    expect(projectImageCount).toBeGreaterThan(0);

    // Check that images have proper src attributes
    for (let i = 0; i < projectImageCount; i++) {
      const img = projectImages.nth(i);
      const src = await img.getAttribute('src');
      expect(src).toBeTruthy();
    }
  });

  test('should have proper semantic structure', async ({ page }) => {
    // Check main semantic elements
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();

    // Check heading hierarchy - there should be at least one h1 and multiple h2s
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);

    const h2s = page.locator('h2');
    await expect(h2s).toHaveCount(3);
  });
});
