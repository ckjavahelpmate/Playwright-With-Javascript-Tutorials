import { test, expect } from '@playwright/test'

test.describe("Scroll Example", { tag: "@playwright-core-examples-regression" }, () => {
    test("Scroll Example", async ({ page }) => {
        await page.goto('https://playwright.dev');
        // await page.waitForTimeout(3000)

        //Scroll to element
        await page.getByText("GitHub", { exact: true }).scrollIntoViewIfNeeded();
        // await page.waitForTimeout(3000)

        // scroll to top
        await page.evaluate(() => { window.scrollTo(0, 0) })
        // await page.waitForTimeout(3000)

        // scroll to button
        await page.evaluate(() => { window.scrollTo(0, document.body.scrollHeight) })
        // await page.waitForTimeout(3000)

        // Zoom in
        await page.evaluate(() => { document.body.style.zoom = "50%" });
        // await page.waitForTimeout(3000)

        // Zoom out
        await page.evaluate(() => { document.body.style.zoom = "90%" });
        // await page.waitForTimeout(3000)

        await page.getByText("Docs", { exact: true }).click();
        // await page.waitForTimeout(3000)

        await page.locator(".menu.thin-scrollbar.menu_SIkG").evaluate(() => {
            page.getByAltText("Supported languages").scrollIntoViewIfNeeded();
        })
        // await page.waitForTimeout(3000)


    })
})

test.describe("Scrollable tab Example", { tag: "@playwright-core-examples-regression" }, () => {
    test("Scrollable tab Example", async ({ page }) => {
        await page.goto('https://playwright.dev');
        // await page.waitForTimeout(3000)

        await page.getByText("Docs", { exact: true }).click();
        // await page.waitForTimeout(3000)

        // Scroll inside scrollable tab
        await page.locator(".menu.thin-scrollbar.menu_SIkG").getByText("Supported languages").scrollIntoViewIfNeeded();
        // await page.waitForTimeout(3000)

    })
})