import { test, expect } from "@playwright/test"; // modern node version

// const { test, expect} = require('@playwright/test'); // old node version


test("@smoke @regression Facebook Test-01", async ({ page }) => {
    await page.goto("https://www.facebook.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');

    await page.evaluate(() => {
        document.body.style.zoom = "30%";
    });

});

test("@regression Facebook Test-02", async ({ page }, testInfo) => {
    await page.goto("https://www.facebook.com/");
    await page.waitForTimeout(3000);
    console.log(testInfo.title + " finished");
});