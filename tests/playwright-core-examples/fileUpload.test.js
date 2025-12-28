import {test, expect} from "@playwright/test"
import path from 'path' ;


test.describe("File upload Example", {tag:"@regression"}, ()=>{
    test("File upload example", async({page})=>{

       const filePath = path.join("C:/CK/CKD11OCT25/demo.text");

        await page.goto("https://the-internet.herokuapp.com/upload")
        await page.waitForTimeout(3000)

        await page.setInputFiles("#file-upload", filePath)
        await page.waitForTimeout(3000)

        await page.locator("#file-submit").click()
        await page.waitForTimeout(3000) 
    })
})