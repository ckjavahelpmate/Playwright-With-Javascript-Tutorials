import { test, expect } from "@playwright/test";

test("@smoke @regression Google Test-01", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');
});

test("@regression Google Test-02", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');
});