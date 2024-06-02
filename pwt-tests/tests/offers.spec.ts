import { test, expect } from '@playwright/test';

test('Переход по карточкам', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.waitForSelector('.cities__places-list .place-card__name a');

  const offerLink = await page.$('a[href^="/offer/"]');

  expect(offerLink).not.toBeNull();

  await offerLink!.click();

  await page.waitForURL('**/offer/**');
});