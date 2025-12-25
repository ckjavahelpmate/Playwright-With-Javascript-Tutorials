import { test, expect } from "@playwright/test"; // modern node version

// const { test, expect} = require('@playwright/test'); // old node version


test("Facebook Test-01", { tag: ['@regression', '@smoke'] }, async ({ page }) => {
    await page.goto("https://www.facebook.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');

    await page.evaluate(() => {
        document.body.style.zoom = "30%";
    });

});

test("Facebook Test-02",  { tag: ['@regression'] },async ({ page }, testInfo) => {
    await page.goto("https://www.facebook.com/");
    await page.waitForTimeout(3000);
    console.log(testInfo.title + " finished");
});