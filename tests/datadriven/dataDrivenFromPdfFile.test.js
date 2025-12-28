import { test, expect } from "@playwright/test"
import { PDFParse } from 'pdf-parse'
// const pdfParse = require('pdf-parse');

test.describe("Data Read From Pdf File", { tag: "@regression" }, () => {
    test("Data Read From Pdf File", async ({ page }) => {

        const pdfPaerser = new PDFParse({ url: "./test-data/Receipt.pdf" });

        const data = await pdfPaerser.getText();

        const lines = data.text.split(/[\r?\n]/);

        for (let line of lines) {
            if (line.toLocaleLowerCase().includes("course fee")) {
                console.log(line)
            }
        }

    })
})