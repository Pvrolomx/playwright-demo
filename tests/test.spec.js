const { test, expect } = require('@playwright/test');

test('suma 5 + 3 = 8', async ({ page }) => {
  await page.goto('https://playwright-demo-pv.vercel.app');
  
  await page.fill('#num1', '5');
  await page.fill('#num2', '3');
  await page.click('#btnSumar');
  
  const resultado = await page.textContent('#suma');
  expect(resultado).toBe('8');
});

test('suma 100 + 200 = 300', async ({ page }) => {
  await page.goto('https://playwright-demo-pv.vercel.app');
  
  await page.fill('#num1', '100');
  await page.fill('#num2', '200');
  await page.click('#btnSumar');
  
  const resultado = await page.textContent('#suma');
  expect(resultado).toBe('300');
});
