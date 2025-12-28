import { test, expect } from "@playwright/test"

test.describe("IFrame Example", { tag: "@regression" }, () => {
    test("Iframe Example", async ({ page }) => {
        await page.goto("https://demoapps.qspiders.com/")
        await page.waitForTimeout(3000)

        await page.getByText('UI Testing Concepts').click();
        await page.waitForTimeout(3000);

        await page.getByText("Frames").click();
        await page.waitForTimeout(3000);

        await page.getByText("iframes").click();
        await page.waitForTimeout(3000);

        const frameHandle = page.frameLocator(".w-full.h-96");

        await frameHandle.locator("#username").fill("Dinga")
        await page.waitForTimeout(3000);

        await frameHandle.locator("#password").fill("Dinga@123")
        await page.waitForTimeout(3000);

        await frameHandle.getByRole('button', { name: "Login" }).click();

        const successMessage = await page.getByRole('status').innerText();

        expect(successMessage).toContain("Login successful!");

    })
})