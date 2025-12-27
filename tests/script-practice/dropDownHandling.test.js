import { test, expect } from "@playwright/test"

test.describe("Drop down handling", { tag: "@regression" }, () => {
    test("Drop down handling", async ({ page }) => {
        await page.goto("https://www.facebook.com");
        await page.waitForTimeout(3000);

        await page.getByRole("button", { name: "Create new account" }).click();
        await page.waitForTimeout(3000);

        const daydropdown = page.locator("#day");
        await daydropdown.selectOption({ label: '3' })
        await page.waitForTimeout(3000);

        const monthDropdown = page.locator("#month");
        await monthDropdown.selectOption({ index: 4 })
        await page.waitForTimeout(3000);

        const yearDropdown = page.locator("#year");
        await yearDropdown.selectOption('1994')
        await page.waitForTimeout(3000);

    })
})