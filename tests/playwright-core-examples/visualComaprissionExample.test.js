import { test, expect } from "@playwright/test"

test.describe("visual-test Example", { tag: "@regression" }, () => {
    test("visual-test Example", async ({ page } ) => {
        await page.goto("https://demoapps.qspiders.com/")
        await page.waitForTimeout(3000)

        await page.getByText('UI Testing Concepts').click();
        await page.waitForTimeout(3000);

        console.log(test.info().title)

        await expect(page).toHaveScreenshot({
            name: `${test.info().title.replace(/\s/g, '_')}.png`,
            fullPage: true
        });



    })
})

