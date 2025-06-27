import { test, expect } from '@playwright/test';

test('Test input iPhone', async ({ page }) => {
  await page.goto('https://opencart.abstracta.us/');
  await page.getByPlaceholder('Search').fill('Iphone');
});
test('Test clic to Mackbook', async ({ page }) => {
  await page.goto('https://opencart.abstracta.us/');
  await page.getByText('MacBook').click();
});