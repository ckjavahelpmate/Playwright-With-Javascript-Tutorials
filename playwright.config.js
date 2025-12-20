
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',

  reporter: 'html',

  use: {
    headless: false,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { channel: 'msedge', headless: false, ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }

  ],

});

