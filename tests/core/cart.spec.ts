import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { ProductsPage } from "../../pages/ProductsPage";

test.describe("Products Page", () => {
    const user = "standard_user";
    const password = "secret_sauce";

    test("User can add multiple items to the cart", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto("/");
        await loginPage.login(user!, password!);

        const productsPage = new ProductsPage(page);
        await productsPage.expectLoaded();

        await productsPage.addItemToCartByName("Sauce Labs Backpack");
        await productsPage.addItemToCartByName("Sauce Labs Bike Light");

        const count = await productsPage.getCartCount();
        expect(count).toBe("2");

        await productsPage.openCart();
        await expect(page).toHaveURL(/cart.html/);
    });
})