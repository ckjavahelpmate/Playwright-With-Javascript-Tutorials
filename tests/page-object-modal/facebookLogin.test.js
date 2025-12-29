import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';

test.describe('Facebook Login Page Tests', { tag: '@page-object-modal-regression' }, () => {

    let loginPage;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);

    });

    test('Should display email and password fields and login button', async ({ page }) => {
        await page.goto('https://www.facebook.com/');
        await page.waitForTimeout(3000);

        await loginPage.loginToApp('Dinga', 'Dinga@123');
        await page.waitForTimeout(5000);
    });

});

