import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test.describe('@e2e', () => {
  test('User can search for a school', async ({ page }) => {
    const home = new HomePage(page);

    await home.goto();
    await home.performSearch('primary school');

    await expect(page).toHaveURL(/search/);
    await expect(home.mainContent()).toContainText(/primary/i);
  });
});
