import {test, expect} from '@playwright/test';

test.describe('Selectinq Test', () => {
    test('should select an option from the dropdown', async ({page}) => {
        await page.goto('/');
        const dropdown = page.locator('#dropdown');
        const selectedOption = page.locator('#selected-option');

        await dropdown.selectOption('option2');
        await expect(selectedOption).toHaveText('Option 2');

        await dropdown.selectOption({ label: 'Option 3' });
        await expect(selectedOption).toContainText('Option 3');
    });
});