import { test, expect } from '@playwright/test';
import { getMonthIndex } from '../../constants/months.js';

test('Date-picker', { tag: ['@date-picker-regression', '@date-picker-smoke'] }, async ({ page }) => {

    const date = "12/25/2024".split("/");

    // 1. Navigate to URL
    await page.goto('https://jqueryui.com/datepicker/');
    await page.waitForTimeout(3000);

    // 2. Frame Handling
    const frameHandle = page.frameLocator('.demo-frame');

    // 3. Enter date in Date Picker textbox
    // await frameHandle.locator('.hasDatepicker#datepicker').fill('10/12/2024');

    await frameHandle.locator('.hasDatepicker#datepicker').click();

    // 4. Select year
    let year = await frameHandle.locator('.ui-datepicker-year').innerText();
    while (year < date[2]) {
        await frameHandle.getByText('Next').click();
        year = await frameHandle.locator('.ui-datepicker-year').innerText();
    }
    while (year > date[2]) {
        await frameHandle.getByText('Prev').click();
        year = await frameHandle.locator('.ui-datepicker-year').innerText();
    }

    // 5. Select month
    let month = await frameHandle.locator('.ui-datepicker-month').innerText();

    while (getMonthIndex(month) < getMonthIndex(date[0])) {
        await frameHandle.getByText('Next').click();
        month = await frameHandle.locator('.ui-datepicker-month').innerText();
    }
    while (getMonthIndex(month) > getMonthIndex(date[0])) {
        await frameHandle.getByText('Prev').click();
        month = await frameHandle.locator('.ui-datepicker-month').innerText();
    }

    // 6. Select date
    await frameHandle.locator(`//a[text()=${date[1]}]`).click();

    await page.waitForTimeout(3000);


});

