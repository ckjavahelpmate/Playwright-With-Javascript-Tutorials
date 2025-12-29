import { test, expect } from '@playwright/test';

test('Playwright Test-01', { tag: ['@browser-launch-regression', '@browser-launch-smoke', "@smoke", '@regression'] }, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(3000);
  await expect(page).toHaveTitle(/Playwright/);
});

test('Playwright Test-02', { tag:['@browser-launch-regression', "@regression"] }, async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.waitForTimeout(3000);

  await page.evaluate(() => document.body.style.zoom = "40%");

  await page.waitForTimeout(3000);
  await expect(page).toHaveTitle(/Playwright/);

  
});

