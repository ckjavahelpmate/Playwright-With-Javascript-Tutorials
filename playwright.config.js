
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: 'html',

  fullyParallel: true, // Not required by default tests run in parallel

  workers: 5, // Number of parallel workers

  use: {
    headless: false,
    screenshot: 'on',
    browserName: 'chromium',
    channel: 'msedge',
    ...devices['Desktop Chrome']
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Smoke Tests',
      grep: /@smoke/
    },
    {
      name: 'Regression Tests',
      grep: /@regression/
    }

  ]

});

