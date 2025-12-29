import { test, expect } from "@playwright/test";

test("Zomato Test-01",  { tag: ['@browser-launch-regression', '@browser-launch-smoke', "@smoke", '@regression'] }, async ({ page }) => {
    await page.goto("https://www.zomato.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');
});

test("Zomato Test-02", { tag: ['@browser-launch-regression', "@regression"] }, async ({ page }) => {
    await page.goto("https://www.zomato.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');
});