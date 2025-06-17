import { test, expect, devices } from '@playwright/test';

test.use({ ...devices['iPhone 13'] });

test('@e2e Mobile view shows hamburger menu', async ({ page }) => {
  await page.goto('https://www.moe.gov.sg');
  const menuButton = page.getByRole('button', { name: /menu|toggle/i });

  await expect(menuButton).toBeVisible();
});
