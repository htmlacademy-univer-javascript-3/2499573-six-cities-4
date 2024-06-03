import { test, expect } from '@playwright/test';

test('Проверка авторизации', async ({ page }) => {

    await page.goto('http://localhost:5173/login');

    await page.fill('input[name="email"]', 'YouKnowWhoIAm@mail.ru');
    await page.fill('input[name="password"]', 'IamWealthyMan');
  
    await page.click('button[type="submit"]');
  
    await page.isVisible(
    "text='Validation error: '/six-cities/login''"
    );
  
    expect(page.url()).toBe('http://localhost:5173/login');
    await page.goto('http://localhost:5173/login');
  
    await page.fill('input[name="email"]', 'YouKnowWhoIAm@mail.ru');
    await page.fill('input[name="password"]', '88IamWealthyMan88');
  
    await Promise.all([
    page.waitForURL('http://localhost:5173'),
    page.click('button[type="submit"]'),
    ]);
});