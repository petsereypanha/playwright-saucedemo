import {test, expect} from '@playwright/test';

test.describe('Check', () => {
  test('should check the checkbox', async ({page}) => {
    await page.goto('/');
    const checkbox = page.locator('#checkbox');
    const text = page.locator('#checkbox-text');
    await expect(checkbox).not.toBeChecked();
    await checkbox.check();
    await expect(checkbox).toBeChecked();

    await checkbox.check();
    await expect(text).toHaveText('Checkbox is checked');
  });

  test('should uncheck the checkbox', async ({page}) => {
    await page.goto('/');
    const checkbox = page.locator('#checkbox');
    await checkbox.check();
    await expect(checkbox).toBeChecked();
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  });
});