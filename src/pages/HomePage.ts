
import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage.ts';

export class HomePage extends BasePage {
//Private locators
private readonly logoutlink: Locator;
private readonly headers: Locator;



constructor(page:Page) {
    super(page);
    this.logoutlink = page.getByRole('link', { name: 'Logout' }).first();
    this.headers=page.getByRole('heading', {level: 2});

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
