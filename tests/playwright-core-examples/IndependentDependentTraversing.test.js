import { test, expect } from '@playwright/test'

test.describe("Independent dependent traversing", { tag: "@playwright-core-examples-regression" },  () => {
    test("Fetch Product Price", async ({ page }) => {

        await page.goto("https://www.flipkart.com");

        await page.locator('[name="q"]').fill('iphone');

        await page.keyboard.press('Enter');

        const titleCard = page.locator(".ZFwe0M", {
            has: page.locator(".RG5Slk", { hasText: "Apple iPhone 16 Pro Max (Desert Titanium, 256 GB)" })
        });

        const price = await titleCard.locator(".hZ3P6w").innerText();
        const rating = await titleCard.locator(".MKiFS6").innerText();

        console.log("Price : "+ price );
        console.log("Rating : "+ rating );


    })
})