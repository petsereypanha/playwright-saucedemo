import {test, expect} from '@playwright/test';     
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';

test.describe('Filter Functionality', () => {
    const user = "standard_user";
    const password = "secret_sauce";
    test('should filter products by name', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto("/");
                await loginPage.login(user!, password!);

        const productsPage = new ProductsPage(page);
            await productsPage.expectLoaded();

        await productsPage.check('');
    });
})