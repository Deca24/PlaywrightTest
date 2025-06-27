import { test, expect } from '@playwright/test';
import { get } from 'http';

test('Select Role', async ({ page }) => {
  await page.goto('https://testertestarudo.com/sandbox-para-pruebas-automatizadas/'); 

  await page.selectOption('#developerRoles', 'backend');
});

test('Click on Button', async ({ page }) => {
  await page.goto('https://testertestarudo.com/sandbox-para-pruebas-automatizadas/');

  await page.click('text="Click para alerta"');
  await page.on('dialog', dialog => {
    expect(dialog.message()).toBe('¡Hola, soy un alert!');
    dialog.accept();
  });
});

test('Complete Form', async ({ page }) => {
  await page.goto('https://testertestarudo.com/sandbox-para-pruebas-automatizadas/');

  await page.getByLabel("Nombre:").fill('Daniel Castaneda');
  await page.getByLabel("Email:").fill('test@email.com');
  await page.fill('input[type="range"]', '25');
  await page.click('text="Registrarse"');

  await expect(page.getByText('Form submitted!')).toBeVisible();
});
