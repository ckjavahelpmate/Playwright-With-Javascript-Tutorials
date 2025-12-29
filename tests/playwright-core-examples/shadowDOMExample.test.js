import { test, expect } from "@playwright/test"

test.describe("Shadow DOM Example", { tag: "@playwright-core-examples-regression" }, () => {
    test("Shadow DOM Example", async ({ page }) => {
        await page.goto("https://demoapps.qspiders.com/")
        // await page.waitForTimeout(3000)

        await page.getByText('UI Testing Concepts').click();
        // await page.waitForTimeout(3000);

        await page.getByText("Shadow Root Elements").click();
        // await page.waitForTimeout(3000);

        await page.getByText("Shadow Root", { exact: true }).click();
        // await page.waitForTimeout(3000);

        // First shadow host
        await page.locator('div.my-3:nth-of-type(1) >> input[placeholder="Enter your username"]').fill('myUsername');

        // Second shadow host
        await page.locator('div.my-3:nth-of-type(2) >> input[placeholder="Enter your password"]').fill('myPassword');
        // await page.waitForTimeout(3000);


    })
})