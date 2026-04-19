import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { ProductsPage } from "../../pages/ProductsPage";

test.describe("Products Page", () => {
    const user = "standard_user";
    const password = "secret_sauce";

    test("should display products and allow adding to cart", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto('/');
        await loginPage.login(user!, password!);

        const productsPage = new ProductsPage(page);
        await productsPage.expectLoaded();

        const inventoryCount = await productsPage.getInventoryCount();
        expect(inventoryCount).toBeGreaterThan(0);

        const itemName = "Sauce Labs Backpack";
        await productsPage.addItemToCartByName(itemName);
        await productsPage.expectCartBadgeCount(1);

        await productsPage.openCart();
        await expect(page).toHaveURL(/cart.html/);
    });
})