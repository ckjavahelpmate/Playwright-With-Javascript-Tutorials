import { test, expect } from "@playwright/test";

test("Zomato Test-01", async ({ page }) => {
    await page.goto("https://www.zomato.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');
});

test("Zomato Test-02", async ({ page }) => {
    await page.goto("https://www.zomato.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');
});