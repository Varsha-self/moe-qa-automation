import { Page, Locator } from '@playwright/test';

export class NavigationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Visit the homepage (since the menu is there)
  goto() {
    return this.page.goto('/');
  }

  // Locate top-level nav menu (like "Education")
  topNavLink(label: string): Locator {
    return this.page.getByRole('link', { name: label });
  }

  // Locate sub-menu item (like "Primary School Education")
  subMenuLink(label: string): Locator {
    return this.page.getByRole('link', { name: label });
  }
}
