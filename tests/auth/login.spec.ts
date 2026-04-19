import { test , expect} from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test.describe("Login Flow", () => {
    const user = "standard_user";
    const password = "secret_sauce";
    const lockedOutUser = "locked_out_user";
    
    test('valid user can login', async ({ page }) => {

        const loginPage = new LoginPage(page);
        await loginPage.goto('/');
        await loginPage.login(user!, password!);

        await expect(page).toHaveURL(/inventory.html/);
        await expect(page.getByText("Products")).toBeVisible();
    })
    test("should show error for locked out user", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login( lockedOutUser, password!);

    await expect(loginPage.errorMessage).toContainText(
        "Sorry, this user has been locked out",
    );
    });
});