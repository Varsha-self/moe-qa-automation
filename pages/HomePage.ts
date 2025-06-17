import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    await this.page.goto('https://www.moe.gov.sg');
  }

  searchButton(): Locator {
    return this.page.getByRole('button', { name: /search/i });
  }

  searchInput(): Locator {
    return this.page.getByRole('searchbox');
  }

  async performSearch(query: string): Promise<void> {
    await this.searchButton().click();
    await this.searchInput().fill(query);
    await this.page.keyboard.press('Enter');
  }
}
