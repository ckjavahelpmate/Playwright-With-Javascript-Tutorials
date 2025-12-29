import{ test, expect} from "@playwright/test"

test.describe("Fetch Car details", {tag:"@regression"}, ()=>{
    test("Fetach Car Details", async({page})=>{

        await page.goto("https://www.carandbike.com/")

        const searchTextBox = page.getByPlaceholder("Search for Cars")
        await page.waitForLoadState('networkidle')
        searchTextBox.click();
        searchTextBox.fill("Mahindra 3XO New Car");


        await page.waitForTimeout(4000);


    })
})



