import { test, expect } from '@playwright/test';

test.describe('@e2e', () => {
  test('Navigation dropdown leads to correct page', async ({ page, browserName }) => {
    // 📍 Visit the homepage
    await page.goto('/');

    // 🖥 Force desktop viewport to avoid mobile hamburger menu
    await page.setViewportSize({ width: 1400, height: 900 });

    // 📱 Handle hamburger menu if visible
    const menuButtons = page.getByRole('button', { name: /menu/i });
    const menuVisible = await menuButtons.first().isVisible().catch(() => false);
    if (menuVisible) {
      await menuButtons.first().click();
    }

    // 🔍 Target the correct "Education in SG" button
    const navButton = page.getByRole('button', { name: /Education in SG/i });

    // 🛑 WebKit needs `force: true` because dropdown menu might block the click
    if (browserName === 'webkit') {
      await navButton.click({ force: true });
    } else {
      await navButton.click();
    }

    // ⏳ Wait for submenu item
    const submenuLink = page.getByRole('link', { name: /Compulsory education/i });
    await expect(submenuLink).toBeVisible({ timeout: 5000 });

    // ✅ Click submenu and validate navigation
    await submenuLink.click();
    await expect(page).toHaveURL(/compulsory-education/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/compulsory education/i);

    // 🧪 Optional debug tool
    // await page.pause();
  });
});
