import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/');
  await page.getByRole('banner').getByText('Playwright', { exact: true }).click();
  await page.getByText('AI Tester', { exact: true }).click();
  await page.getByRole('banner').getByText('100', { exact: true }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Sign in with Google Continue' }).click();
  await expect(page.locator('#headingText')).toMatchAriaSnapshot(`- text: "Access blocked: Authorization Error"`);
});