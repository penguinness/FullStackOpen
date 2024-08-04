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

  describe('Login', () => {
    test('succeeds with correct credentials', async ({ page }) => {
      await loginWith(page, 'penguinness', 'pingu');
      await expect(page.getByText('Penguin logged in')).toBeVisible();
    });

    test('fails with wrong credentials', async ({ page }) => {
      await loginWith(page, 'penguinness', 'wrong');

      const errorDiv = await page.locator('.error');
      await expect(errorDiv).toContainText('wrong username or password');
      await expect(errorDiv).toHaveCSS('border-style', 'solid');
      await expect(errorDiv).toHaveCSS('color', 'rgb(255, 0, 0)');

      await expect(page.getByText('Penguin logged in')).not.toBeVisible();
    });
  });
});
