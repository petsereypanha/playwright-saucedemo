import { test as base } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { ProductsPage } from "../../pages/ProductsPage";

// 1. Define the types for your pages
type MyFixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
};

// 2. Extend the base test
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
});

export { expect } from "@playwright/test";
