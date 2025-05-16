// pages/HomePage.ts
import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }


  header(): Locator {
    return this.page.getByRole('banner');
  }

  searchButton(): Locator {
    return this.page.getByRole('button', { name: 'Search' });
  }

  searchInput(): Locator {
    return this.page.getByRole('textbox', { name: 'What are you searching for?' });
  }

  async performSearch(query: string): Promise<void> {
    await this.searchButton().click();
    await this.searchInput().fill(query);
    await this.page.keyboard.press('Enter');
  }

  mainContent(): Locator {
    return this.page.getByRole('main');
  }
}
