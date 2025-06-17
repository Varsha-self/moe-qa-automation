import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { SearchPage } from '../../pages/SearchPage';

test('@e2e Search shows message on invalid query', async ({ page }) => {
  const home = new HomePage(page);
  const search = new SearchPage(page);

  await home.goto();
  await home.performSearch('zzzxxyy!@#'); // Random invalid text

  await search.expectNoResultsVisible();
});
