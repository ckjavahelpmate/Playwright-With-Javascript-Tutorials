import { test, expect } from "@playwright/test";

test("@smoke @regression Facebook Test-01", async ({ page }) => {
    await page.goto("https://www.facebook.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');
});

test("@regression Facebook Test-02", async ({ page }) => {
    await page.goto("https://www.facebook.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');
});