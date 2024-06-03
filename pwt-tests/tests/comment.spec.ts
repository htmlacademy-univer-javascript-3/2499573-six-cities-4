import { test, expect } from '@playwright/test';

const REVIEW_TEXT = 'Amazing! Great! Wonderful! Breathtaking! Shooking! Beautiful! Nice! Brilliant! Excellent! Magnificent!';

test('Отправка комментария', async ({ page }) => {

  await page.goto('http://localhost:5173');

  await page.waitForSelector('.cities__card');

  await page.locator('.place-card__name').first().click();

  await page.waitForURL('**/offer/**');

  const hasReviewForm = await page.isVisible('.reviews__form');
  expect(hasReviewForm).toBeFalsy();

  await page.goto('http://localhost:5173/login');

  await page.fill('input[name="email"]', 'YouKnowWhoIAm@mail.ru');
  await page.fill('input[name="password"]', 'IamWealthyMan1');
  await page.click('button[type="submit"]');

  await page.waitForSelector('.cities__card');

  await page.locator('.place-card__name').first().click();

  await page.waitForURL('**/offer/**');

  await page.fill('[name="review"]', REVIEW_TEXT);
  await page.getByTitle('perfect').click();

  await page.waitForSelector('.offer__inside-list');
  const hasCommentFormAfterAuth = await page.isVisible('.reviews__form');
  expect(hasCommentFormAfterAuth).toBeTruthy();

  await Promise.all([
    page.waitForResponse(
      (resp) => resp.url().includes('/comments') && resp.status() === 201
    ),
    page.click('button[type="submit"]'),
  ]);

  const reviewText = await page
    .locator('.reviews__text')
    .first()
    .textContent();
  const reviewAuthor = (await page
    .locator('.reviews__user-name')
    .first()
    .textContent())
    ?.trim();
  const reviewRating = await page
    .locator('.reviews__stars>span')
    .first()
    .getAttribute('style');

  expect(reviewText).toBe(REVIEW_TEXT);
  expect(reviewAuthor).toBe('YouKnowWhoIAm');
  expect(reviewRating).toBe('width: 100%;');
});