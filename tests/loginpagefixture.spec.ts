import { test, expect } from '../src/fixtures/pagefixtures.ts';




test.beforeEach(async ({loginPage,homePage }) => {
  await loginPage.goToLoginPage();
});

test('login page title', async ({loginPage}) => {
  const title = await loginPage.getLoginPageTitle();
  console.log('Title of the page is: ' + title);
  expect(title).toBe('Account Login');
});

test('forgot password link exists', async ({loginPage}) => {
  expect(await loginPage.isForgotPasswordLinkExist()).toBeTruthy();
});

test('login with valid credentials', async ({loginPage,homePage}) => {
await loginPage.dologin('pwtestbatch@open.com', 'pw123');
    
});