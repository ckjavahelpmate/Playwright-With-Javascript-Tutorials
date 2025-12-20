import { test, expect } from "@playwright/test";

test("Facebook Test-01", async ({ page }) => {
    await page.goto("https://www.facebook.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');
});

test("Facebook Test-02", async ({ page }) => {
    await page.goto("https://www.facebook.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');
});