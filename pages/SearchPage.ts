import { Page, Locator, expect } from '@playwright/test';

export class SearchPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  resultsText(): Locator {
    return this.page.locator('text=/results/i');
  }

  noResultsText(): Locator {
    return this.page.locator('text=/no results/i');
  }

  async expectResultsVisible() {
    await expect(this.resultsText()).toBeVisible();
  }

  async expectNoResultsVisible() {
    await expect(this.noResultsText()).toBeVisible();
  }
}
