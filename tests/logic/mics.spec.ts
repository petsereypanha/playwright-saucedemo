import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';

test.describe('Multiple matches fails', () => {
    const user = "standard_user";
    const password = "secret_sauce";
    
    test('should fail when multiple elements match the locator', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto("/");
                await loginPage.login(user!, password!);

           const productsPage = new ProductsPage(page);
                await productsPage.expectLoaded();

        await page.locator(".inventory_item_name").click();
    })
})