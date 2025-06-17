import { Page, Locator } from '@playwright/test';

export class CalendarPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openFromHome(): Promise<void> {
    await this.page.getByRole('link', { name: 'Academic calendar' }).click();
  }

  heading(): Locator {
    return this.page.getByRole('heading', { name: /academic calendar/i });
  }
}
