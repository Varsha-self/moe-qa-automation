# Test info

- Name: @e2e >> Navigation dropdown leads to correct page
- Location: /Users/varshasubramaniam/moe-qa-automation/tests/e2e/navigation.spec.ts:4:7

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: /Education in SG/i })
    - locator resolved to <button type="button" aria-pressed="false" aria-expanded="false" class="navigation-arrow">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - <div class="moe-site-navigation__globals__dropdown-menu">…</div> intercepts pointer events
  - retrying click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="moe-site-navigation__globals__dropdown-menu">…</div> intercepts pointer events
  - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="moe-site-navigation__globals__dropdown-menu">…</div> intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <x-pw-glass></x-pw-glass> intercepts pointer events
  9 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="moe-site-navigation__globals__dropdown-menu">…</div> intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="moe-site-navigation__globals__dropdown-menu">…</div> intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <x-pw-glass></x-pw-glass> intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <x-pw-glass></x-pw-glass> intercepts pointer events
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - performing click action
      - <div class="moe-site-navigation__globals__dropdown-menu">…</div> intercepts pointer events
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <x-pw-glass></x-pw-glass> intercepts pointer events
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - performing click action
      - <div class="moe-site-navigation__globals__dropdown-menu">…</div> intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <x-pw-glass></x-pw-glass> intercepts pointer events
  - retrying click action
    - waiting 500ms

    at /Users/varshasubramaniam/moe-qa-automation/tests/e2e/navigation.spec.ts:10:27
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test.describe('@e2e', () => {
   4 |   test('Navigation dropdown leads to correct page', async ({ page }) => {
   5 |     await page.goto('/');
   6 |
   7 |     // Click the "Education in SG" button – more stable than hover
   8 |     const dropdownTrigger = page.getByRole('button', { name: /Education in SG/i });
   9 |     await expect(dropdownTrigger).toBeVisible();
> 10 |     await dropdownTrigger.click();
     |                           ^ Error: locator.click: Target page, context or browser has been closed
  11 |
  12 |     // Pause or take screenshot for debugging
  13 |     // await page.pause();
  14 |     // await page.screenshot({ path: 'debug-dropdown.png' });
  15 |
  16 |     // Wait for dropdown link to appear
  17 |     const submenuItem = page.getByRole('link', { name: /Compulsory education/i });
  18 |     await expect(submenuItem).toBeVisible({ timeout: 5000 });
  19 |
  20 |     // Click and validate page
  21 |     await submenuItem.click();
  22 |     await expect(page).toHaveURL(/compulsory-education/);
  23 |     await expect(page.getByRole('heading', { level: 1 })).toContainText(/compulsory education/i);
  24 |   });
  25 | });
  26 |
```