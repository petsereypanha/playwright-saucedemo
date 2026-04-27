import {test, expect} from '@playwright/test'

test.describe('Generic Authentication Tests', () => {
    test('should display error for invalid credentials', async ({ page }) => {
        await page.goto('/login');

        await page.locator('.login-box input#password').fill('wrong_password');

        await page.locator(".login-box input#login-button").click();

        await expect(page.locator('.error-message')).toHaveText('Invalid username or password');
    })
})