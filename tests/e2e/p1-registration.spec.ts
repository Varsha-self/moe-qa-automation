import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('@e2e Primary 1 Registration page opens', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();

  await page.getByRole('link', { name: /Primary 1 registration/i }).click();
  await expect(page).toHaveURL(/p1-registration/);
  await expect(page.getByRole('heading', { level: 1, name: /Primary 1/i })).toBeVisible();
});
