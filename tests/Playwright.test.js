import { test, expect } from '@playwright/test';

test('Playwright Test-01', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(3000);
  await expect(page).toHaveTitle(/Playwright/);
});

test('Playwright Test-02', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(3000);
  await expect(page).toHaveTitle(/Playwright/);
});

