import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test.describe('@smoke', () => {
  test('Homepage loads and header is visible', async ({ page }) => {
    const home = new HomePage(page);

    await home.goto();                          // Navigate to homepage

    await expect(home.header()).toBeVisible();  // Validate header (role: banner)

    await expect(page).toHaveTitle(/Ministry of Education/i); // Title check
  });
});
