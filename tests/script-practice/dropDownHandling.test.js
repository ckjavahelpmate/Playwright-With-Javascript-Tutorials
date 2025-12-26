import {test, expect} from "@playwright/test"

test.describe("Drop down handling", {tag: "@regression"}, ()=>{
    test("Drop down handling", async({page})=>{
        await page.goto("https://www.facebook.com");
        await page.waitForTimeout(3000) ;

        await page.getByRole("button", {name :"Create new account"}).click();
        await page.waitForTimeout(3000) ;

        await page.selectOption("#day", { label: '3'})
        await page.waitForTimeout(3000) ;

        await page.selectOption("#month", {index:4})
        await page.waitForTimeout(3000) ;

        await page.selectOption("#year", '1994')
        await page.waitForTimeout(3000) ;

    })
})