import { test, expect } from "@playwright/test";

const title = "Swag Labs";
const productTitle = "Products";

test.describe("Navigation", () => {
  test("should navigate to the create action page", async ({ page }) => {
    await page.goto("/inventory.html", {timeout: 5000});
    await expect(page).toHaveTitle(title);

    await page.goBack({timeout: 8000});
    await expect(page).toHaveTitle(productTitle);

    await page.goForward();
    await expect(page).toHaveTitle(title);

    await page.reload();
    await expect(page).toHaveTitle(title);
  });

  test("Navigation test", async ({ page }) => {
    await page.goto("/inventory.html", { waitUntil: "load", timeout: 5000 });
    await expect(page).toHaveTitle(title);
  });

  test("Load speed with navigation", async ({ page }) => {
    await page.goto("/inventory.html");
    await expect(page).toHaveTitle(title);

    await page.goBack();
    await expect(page).toHaveTitle(productTitle);

    await page.goForward();
    await expect(page).toHaveTitle(title);

    await page.reload();
    await expect(page).toHaveTitle(title);
  });
});
