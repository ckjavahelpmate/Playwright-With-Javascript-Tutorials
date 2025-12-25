import { test, expect } from '@playwright/test';

// Accessing environment variables from .env file   
const url = process.env.url;
const env = process.env.env;
const username = process.env.username;
const password = process.env.password;

test.describe('@regression Data-Driven Testing from .env File', () =>
{
  test('Login Test using .env Data @datadriven', async ({ page }) =>
  {
    console.log(`Environment: ${env}`);

    // Navigate to the URL from .env file
    await page.goto(url);   
    await page.waitForTimeout(3000);

    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
  });
});