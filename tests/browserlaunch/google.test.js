import { test, expect } from "@playwright/test";
import { assert } from "console";

test("Google Test-01",  { tag: ['@regression', '@smoke'] }, async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');

});

test("Google Test-02", { tag: ['@regression'] }, async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');
});