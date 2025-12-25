import { expect } from '@playwright/test';

export class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.emailTestField = page.locator('#email');
        this.passwordTestField = page.locator('#pass');
        this.loginButton = page.locator('[name="login"]');
    }

    async loginToApp(email, password) {
        await this.emailTestField.fill(email);
        await this.passwordTestField.fill(password);
        await this.loginButton.click();
    }
}