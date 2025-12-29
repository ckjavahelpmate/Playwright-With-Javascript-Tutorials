import { test, expect } from "@playwright/test"
import path from 'path';


test.describe("Alert Pop-up Example", { tag: "@playwright-core-examples-regression" }, () => {
    test("Alert Pop-up example", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
        // await page.waitForTimeout(3000)

        page.on('dialog', async (dialog) => {
            console.log("Alert message : " + dialog.message());
            // await page.waitForTimeout(3000)
            if (dialog.type() === 'prompt') {
                dialog.accept('Hello bangalore')
            }
            else {
                dialog.accept();
            }

        })

        await page.getByRole('button', { name: 'Click for JS Alert' }).click();
        let resultMessage = await page.locator("#result").innerText();
        console.log(resultMessage);
        // await page.waitForTimeout(3000)

        await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
        resultMessage = await page.locator("#result").innerText();
        console.log(resultMessage);
        // await page.waitForTimeout(3000)

        await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
        resultMessage = await page.locator("#result").innerText();
        console.log(resultMessage);
        // await page.waitForTimeout(3000)


    })
})
