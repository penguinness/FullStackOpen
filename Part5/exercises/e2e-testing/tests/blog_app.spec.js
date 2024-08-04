const { test, describe, expect, beforeEach } = require('@playwright/test');
const { loginWith, createBlog } = require('./helper');

describe('Blog app', () => {
  beforeEach(async ({ page, request }) => {
    await request.post('http://localhost:3003/api/testing/reset');
    await request.post('http://localhost:3003/api/users', {
      data: {
        name: 'Penguin',
        username: 'penguinness',
        password: 'pingu',
      },
    });
    await page.goto('/');
  });

  test('Front page can be opened', async ({ page }) => {
    const locator = await page.getByText('Blogs');
    await expect(locator).toBeVisible();
  });

  test('Login form is shown', async ({ page }) => {
    const locator = await page.getByRole('button', { name: 'login' });
    await expect(locator).toBeVisible();
  });
});
