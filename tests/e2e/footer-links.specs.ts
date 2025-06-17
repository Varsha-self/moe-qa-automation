import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { FooterPage } from '../../pages/FooterPage';

test('@e2e Footer link to Contact page', async ({ page }) => {
  const home = new HomePage(page);
  const footer = new FooterPage(page);

  await home.goto();
  await footer.clickFooterLink('Contact');
  await expect(footer.heading('Contact')).toBeVisible();
});
