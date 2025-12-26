import { test, expect } from '@playwright/test'

test.describe('Code gen test ', { tag: "@regression" }, async () => {
    test("Login Test", async ({ page }) => {
        await page.goto('https://www.facebook.com/');
        await page.waitForTimeout(3000);

        await page.getByTestId('royal-email').click();
        await page.getByTestId('royal-email').fill('Dinga');
        await page.waitForTimeout(3000);

        await page.getByTestId('royal-pass').click();
        await page.getByTestId('royal-pass').fill('Dinga@123');
        await page.waitForTimeout(3000);

        await page.getByTestId('royal-login-button').click();
        let errorMessage = await page.getByText('The password that you\'ve').innerText();
        console.log(errorMessage);
    })
})
