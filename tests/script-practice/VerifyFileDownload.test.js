import { test, expect } from '@playwright/test'
import fs from 'fs' ;

test.describe("Verify file download", { tag: "@regression" }, () => {
    test("Verify File download", async ({ page }) => {

        await page.goto("https://the-internet.herokuapp.com/download")
        await page.waitForTimeout(3000)

        // Set event listener
        const downloadPromise = page.waitForEvent('download'); 

        // Click on download link
        await page.getByText("some-file.txt").click();

        // Extract file from promise
        const download = await downloadPromise ;

        //get filename
        const filePath =  `downloads/${download.suggestedFilename()}` ;

        //save file
        await download.saveAs(filePath);

        //Verify the file exists or not
        expect( fs.existsSync(filePath)).toBe(true) ;


    })
})