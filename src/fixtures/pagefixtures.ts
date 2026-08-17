import { test as baseTest, expect, type Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';
import { HomePage } from '../pages/HomePage.ts';

type MyFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
};

export const test = baseTest.extend<MyFixtures>({
    loginPage: async ({ page }: { page: Page }, use: (p: LoginPage) => Promise<void>) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    homePage: async ({ page }: { page: Page }, use: (h: HomePage) => Promise<void>) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
});

export { expect };

