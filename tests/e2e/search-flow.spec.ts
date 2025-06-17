import { Page, Locator } from '@playwright/test';

export class FooterPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickFooterLink(name: string): Promise<void> {
    await this.page.getByRole('link', { name }).click();
  }

  heading(expected: string): Locator {
    return this.page.getByRole('heading', { name: new RegExp(expected, 'i') });
  }
}
