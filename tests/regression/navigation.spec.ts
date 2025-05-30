import { test, expect } from '@playwright/test';
import { NavigationPage } from '../../pages/NavigationPage';

test.describe('@regression', () => {
  test('Navigation dropdown leads to correct page', async ({ page }) => {
    const nav = new NavigationPage(page);

    await nav.goto();

    // Optional: Click mobile menu toggle if visible
    const toggleMenu = page.getByRole('button', { name: /menu|toggle/i });
    if (await toggleMenu.isVisible().catch(() => false)) {
      await toggleMenu.click();
    }

    // Wait and hover over 'Education in SG'
    const educationLink = nav.topNavLink('Education in SG');
    await educationLink.waitFor({ state: 'visible' });
    await educationLink.hover();

    // Click the submenu link once visible
    const submenuLink = nav.subMenuLink('Compulsory education');
    await submenuLink.waitFor({ state: 'visible' });
    await submenuLink.click();

    // Validate the final page
    await expect(page).toHaveURL(/compulsory-education/);
    await expect(page.getByRole('heading', { name: /compulsory education/i })).toBeVisible();
  });
});
