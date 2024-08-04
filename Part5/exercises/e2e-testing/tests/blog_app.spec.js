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

  describe('When logged in', () => {
    beforeEach(async ({ page }) => {
      await loginWith(page, 'penguinness', 'pingu');
    });

    test('a new blog can be created', async ({ page }) => {
      await createBlog(
        page,
        'Playwright Blog',
        'Mr. Playwright',
        'https://playwrightblog.com'
      );
      await expect(
        page.getByText('Playwright Blog - Mr. Playwright')
      ).toBeVisible();
    });

    describe('when a blog has been created', () => {
      beforeEach(async ({ page }) => {
        await createBlog(
          page,
          'Playwright Blog',
          'Mr. Playwright',
          'https://playwrightblog.com'
        );
      });

      test('the blog can be liked', async ({ page }) => {
        await page.getByRole('button', { name: 'view' }).click();
        await page.getByRole('button', { name: 'like' }).click();
        await expect(page.getByText('1 likes')).toBeVisible();
      });
    });

    test('the creator of a blog can remove it', async ({ page }) => {
      await loginWith(page, 'penguinness', 'pingu');
      await createBlog(
        page,
        'Playwright Blog',
        'Mr. Playwright',
        'https://playwrightblog.com'
      );
      await page.getByRole('button', { name: 'view' }).click();
      await page.getByRole('button', { name: 'remove' }).click();
      await expect(
        page.getByText('Playwright Blog - Mr. Playwright')
      ).not.toBeVisible();
    });
  });
});
