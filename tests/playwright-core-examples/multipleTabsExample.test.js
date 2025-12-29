import { test, expect } from "@playwright/test"

test.describe("Multiple Tabs Example", { tag: "@playwright-core-examples-regression" }, () => {
    test("Multiple tabs Example", async ({ page }) => {
        await page.goto("https://demoapps.qspiders.com/")
        // await page.waitForTimeout(3000)

        await page.getByText('UI Testing Concepts').click();
        // await page.waitForTimeout(3000);

        await page.getByText("Popups").click();
        // await page.waitForTimeout(3000);

        await page.getByText("Browser Windows").click();
        // await page.waitForTimeout(3000);

        const newPage = await openNewTab(page.context(), async () => {
            await page.locator(".p-4", {
                has: page.getByText("Watches")
            }).getByText("view more").click();
        })
        // await newPage.waitForTimeout(3000);

        await newPage.getByRole('button', { name: "Add to Cart" }).click();
        // await newPage.waitForTimeout(3000);

        await newPage.close();
        // await page.waitForTimeout(3000);


        const np = await openNewTab(page.context(), async () => {
            await page.locator(".p-4", {
                has: page.getByText("Laptop")
            }).getByText("view more").click();
        })
        // await np.waitForTimeout(3000);

        await np.close();
        // await page.waitForTimeout(3000);


    })
})

// Helper function
async function openNewTab(context, action) {
    const newPagePromise = context.waitForEvent('page');
    await action();
    const newPage = await newPagePromise;
    await newPage.waitForLoadState();
    return newPage;
}