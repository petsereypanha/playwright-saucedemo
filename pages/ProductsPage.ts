import { Page, Locator, expect } from "@playwright/test";

export class ProductsPage {
  check() {
      throw new Error('Method not implemented.');
  }
  getByRole(arg0: string, arg1: { name: string; }) {
      throw new Error('Method not implemented.');
  }
  readonly page: Page;
  readonly inventoryItems: Locator;
  readonly cartBadge: Locator;
  readonly pageTitle: Locator;
  readonly shoppingCartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItems = page.locator(".inventory_item");
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.pageTitle = page.locator(".title");
    this.shoppingCartLink = page.locator(".shopping_cart_link");
  }

  async expectLoaded() {
    await expect(this.pageTitle).toHaveText("Products");
    await expect(this.inventoryItems.first()).toBeVisible();
  }

  async getInventoryCount() {
    return await this.inventoryItems.count();
  }

  async addItemToCartByName(itemName: string) {
    const item = this.inventoryItems.filter({ hasText: itemName });
    await expect(item).toHaveCount(1);
    await item.getByRole("button", { name: "Add to cart" }).click();
  }

  async openCart() {
    await this.shoppingCartLink.click();
  }

  async getCartCount(): Promise<string> {
    return await this.cartBadge.innerText();
  }

  async expectCartBadgeCount(count: number) {
    await expect(this.cartBadge).toHaveText(count.toString());
  }
}
