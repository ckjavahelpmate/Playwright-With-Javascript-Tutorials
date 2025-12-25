import { test, expect } from '@playwright/test';
import testData from '../../testdata/testData.json' assert { type: 'json' };


test.describe('@smoke @regression Login Tests', () => {
    for (const data of testData.loginData) {
        test(`Login with ${data.username}`, async ({ page }) => {

            await page.goto('https://www.zomato.com');
            console.log('#username', data.username);
            console.log('#password', data.password);
            console.log('#loginBtn');

        });
    }
});


test.describe('@regression Search Tests', () => {
    for (const data of testData.searchData) {
        test(`Search for ${data.keyword}`, async ({ page }) => {

            await page.goto('https://www.facebook.com');
            console.log('#search', data.keyword);
            console.log('#search', 'Enter');

        });
    }
});


test.describe('@smoke @regression Profile Update Tests', () => {
    for (const data of testData.profileData) {
        test(`Update profile for ${data.name}`, async ({ page }) => {

            await page.goto('https://www.google.com');
            console.log('#name', data.name);
            console.log('#email', data.email);
            console.log('#saveBtn');

        });
    }
});
