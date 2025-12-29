
import { defineConfig, devices } from '@playwright/test'; // To import defineConfig & devices from Playwright test module
import dotenv from 'dotenv'; // To import dotenv module


dotenv.config({ path: '.env', override: true }); // To configure & specify path to .env file

export default defineConfig(
  {
    // Global settings
    testDir: './tests', // To specify test directory
    snapshotDir: './visual-test-snapshots',
    timeout: 50 * 1000, // each test is given 50 seconds
    reporter: 'html', // To generate HTML report
    retries: 1, // Retry once on failure
    fullyParallel: true, // To execute tests in parallel -> by default true
    workers: Number(process.env.WORKERS) || 5, // Number of parallel workers
    // slowMo: 100, // Slow down by 100ms

    // use {} = browser/context/page shared settings for all the projects below
    use:
    {
      headless: process.env.HEADLESS || false,// To run tests in headless mode or not
      screenshot: 'on', // To take screenshots even when tests pass; options are off, on, only-on-failure
      video: 'off', // To record video for each test; options are off, on, retain-on-failure
      trace: 'on', // To capture trace for each test; options are off, on, retain-on-failure
      browserName: process.env.BROWSER || 'chromium', // Default browser
      channel: process.env.CHANNEL || 'chrome', // To specify channel like chrome, msedge, etc.
      httpCredentials: // To handle Authentication pop-ups
      {
        username: 'admin',
        password: 'admin@123'
      },
      permissions: ['notifications'], // To handle notification pop-ups
    },

    // Global setup & teardown files
    globalSetup: './tests/hooks/global-setup.js',
    globalTeardown: './tests/hooks/global-teardown.js',

    // test grouping & execution rules, like smoke, regression, etc.
    // projects:
    //   [
    //     {
    //       name: 'Smoke Tests',
    //       grep: /@smoke/
    //     },
    //     {
    //       name: 'Regression Tests',
    //       grep: /@regression/
    //     }
    //   ]
  });

