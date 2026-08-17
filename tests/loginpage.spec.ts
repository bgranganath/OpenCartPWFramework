import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage.ts';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
});

test('login page title', async () => {
  const title = await loginPage.getLoginPageTitle();
  console.log('Title of the page is: ' + title);
  expect(title).toBe('Account Login');
});

test('forgot password link exists', async () => {
  expect(await loginPage.isForgotPasswordLinkExist()).toBeTruthy();
});

test('login with valid credentials', async () => {
loginPage.dologin('pwtestbatch@open.com', 'pw123');
    
});