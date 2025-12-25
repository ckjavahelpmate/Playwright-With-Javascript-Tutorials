import { test, expect } from "@playwright/test";

test("Swiggy Test-01", { tag: ['@regression', '@smoke'] }, async ({ page }) => {
    await page.goto("https://www.swiggy.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');
});

test("Swiggy Test-02", { tag: ['@regression'] }, async ({ page }) => {
    await page.goto("https://www.swiggy.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');
});