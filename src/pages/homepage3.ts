
import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage.ts';

export class HomePage extends BasePage {
//Private locators
private readonly logoutlink: Locator;
private readonly headers: Locator;
private readonly USERNAME: Locator;
private readonly USERNAME_INPUT: Locator;


constructor(page:Page) {
    super(page);
    this.logoutlink = page.getByRole('link', { name: 'Logout' }).first();
    this.headers=page.getByRole('heading', {level: 2});
    this.USERNAME=page.getByRole('textbox', { name: 'Username' });
    this.USERNAME_INPUT=page.getByRole('textbox', { name: 'Username' });
  }


async getHomePageTitle(): Promise<string> {
    return this.page.title();
}

async islogoutLinkExist(): Promise<boolean> {
    return this.logoutlink.isVisible();
}

async gethomePageHeaders(): Promise<string[]> {
    return await this.headers.allInnerTexts();
}
}
