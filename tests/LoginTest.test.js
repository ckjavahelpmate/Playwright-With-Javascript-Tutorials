import { test, expect } from "@playwright/test";

test("Login Test", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');
});