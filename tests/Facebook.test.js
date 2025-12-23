import { test, expect } from "@playwright/test"; // modern node version

// const { test, expect} = require('@playwright/test'); // old node version

import fs from 'fs';

test("@smoke @regression Facebook Test-01", async ({ page }) => {
    await page.goto("https://www.facebook.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');

    
});

test("@regression Facebook Test-02", async ({ page }) => {
    await page.goto("https://www.facebook.com/");
    await page.waitForTimeout(3000);
    console.log('test finished');
    const testDataModule = JSON.parse(fs.readFileSync('./testdata/testData.json', 'utf-8'));
    console.log(testDataModule);
});