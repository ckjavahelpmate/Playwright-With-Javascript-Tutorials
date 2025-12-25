import { test, expect } from "@playwright/test";

test("@smoke @regression Swiggy Test-01", async ({ page }) => {
    await page.goto("https://www.swiggy.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');
});

test("@regression Swiggy Test-02", async ({ page }) => {
    await page.goto("https://www.swiggy.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');
});