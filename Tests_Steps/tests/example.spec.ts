import { test, expect } from '@playwright/test';

test.describe('Playwright Example Tests', () => {
  test('has title', async ({ page }) => {

  await test.step("Go to URL", async () => {
    await page.goto('https://playwright.dev/');
  });
  
  await test.step("Then the user cann see the page", async () => {
    await expect(page).toHaveTitle(/Playwright/);
  });

});
});
test.describe('Playwright Example Tests 2', () => {
  
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await test.step("Click on Get started link", async () => {
    await page.getByRole('link', { name: 'Get started' }).click();
  });

  await test.step("", async () => {
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
});

});
