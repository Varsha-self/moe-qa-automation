import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { CalendarPage } from '../../pages/CalendarPage';

test('@e2e Academic calendar page is accessible', async ({ page }) => {
  const home = new HomePage(page);
  const calendar = new CalendarPage(page);

  await home.goto();
  await calendar.openFromHome();

  await expect(calendar.heading()).toBeVisible();
});
