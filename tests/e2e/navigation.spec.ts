import { test, expect } from '@playwright/test';

test.describe('@e2e', () => {
  test('Navigation dropdown leads to correct page', async ({ page }) => {
    await page.goto('/');

    // Click the "Education in SG" button – more stable than hover
    const dropdownTrigger = page.getByRole('button', { name: /Education in SG/i });
    await expect(dropdownTrigger).toBeVisible();
    await dropdownTrigger.click();

    // Pause or take screenshot for debugging
    // await page.pause();
    // await page.screenshot({ path: 'debug-dropdown.png' });

    // Wait for dropdown link to appear
    const submenuItem = page.getByRole('link', { name: /Compulsory education/i });
    await expect(submenuItem).toBeVisible({ timeout: 5000 });

    // Click and validate page
    await submenuItem.click();
    await expect(page).toHaveURL(/compulsory-education/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/compulsory education/i);
  });
});
