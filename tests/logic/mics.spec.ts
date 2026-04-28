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

        const clickPromise = page.getByRole("button", { name: "Add to cart" }).click();

        await expect(clickPromise).rejects.toThrow(
        /strict mode violation|resolved to \d+ elements/i,
        );

        for (const message of await clickPromise.catch(e => e.message)) {
        console.log(message);
        }
    })
})