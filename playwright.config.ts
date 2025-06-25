import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 1,
  timeout: 30000,
  use: {
    headless: true,
    baseURL: 'https://www.moe.gov.sg',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['list'], ['html']],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    /*{
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/
  ],
});
