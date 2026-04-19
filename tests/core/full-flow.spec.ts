import { test, expect } from "../fixtures/baseTest";
import { CartPage } from "../../pages/CartPage";
import { CheckoutPage } from "../../pages/CheckoutPage";
import { LoginPage } from "../../pages/LoginPage";
import { ProductsPage } from "../../pages/ProductsPage";

test("Full End-to-End: Login to Order Confirmation", async ({
  page,
    loginPage,
    productsPage,
}) => {

    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // 1. Auth
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    // 2. Selection
    await productsPage.addItemToCartByName("Sauce Labs Backpack");
    await productsPage.addItemToCartByName("Sauce Labs Onesie");
    await page.click(".shopping_cart_link"); // Quick shortcut or add to ProductsPage

    // 3. Checkout
    await cartPage.proceedToCheckout();
    await checkoutPage.fillInformation("Serey", "Panha", "12345");
    await checkoutPage.completeOrder();

    // 4. Final Assertion
    await expect(checkoutPage.successMessage).toHaveText(
        "Thank you for your order!",
    );
});
