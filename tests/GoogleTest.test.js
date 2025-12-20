import { test, expect } from "@playwright/test";

test("Google Test-01", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');
});

test("Google Test-02", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');
});