import { test, expect } from '@playwright/test';
import { NavigationPage } from '../../pages/NavigationPage';

test.describe('@regression', () => {
  test('Navigation dropdown leads to correct page', async ({ page }) => {
    const nav = new NavigationPage(page);

    await nav.goto();
    await nav.topNavLink('Education in SG').hover();

    await nav.subMenuLink('Compulsory education').click();
    await expect(page).toHaveURL(/compulsory-education/);
    await expect(page.getByRole('heading', { name: /compulsory education/i })).toBeVisible();

  });
});
