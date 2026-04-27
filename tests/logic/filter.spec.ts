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

        const sortDropdown = page.locator(
          '[data-test="product-sort-container"]',
        );
        await sortDropdown.selectOption("az");

        const names = await page
          .locator(".inventory_item_name")
          .allTextContents();
        const sorted = [...names].sort((a, b) => a.localeCompare(b));

        expect(names).toEqual(sorted);
        await expect(page.locator(".inventory_item_name").first()).toHaveText(
          "Sauce Labs Backpack",
        );
    });
})
