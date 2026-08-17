import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage.ts';
import { HomePage } from '../src/pages/HomePage.ts';

let loginPage: LoginPage;
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  await loginPage.dologin('pwtestbatch@open.com', 'pw123');
  homePage = new HomePage(page);
});

test('home page title', async () => {
  const title = await homePage.getHomePageTitle();
  console.log('Title of the page is: ' + title);
  expect(title).toBe('My Account');
});

test('logout link exists', async () => {
  expect(await homePage.islogoutLinkExist()).toBeTruthy();
});

test('home page headers', async () => {
  const headers = await homePage.gethomePageHeaders();
  console.log('Headers of the page are: ' + headers);
  expect(headers).toEqual(['My Account', 'My Orders', 'My Affiliate Account', 'Newsletter']);
});
