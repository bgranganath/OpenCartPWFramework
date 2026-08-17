
import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage.ts';

export class LoginPage extends BasePage {
//Private locators
private readonly emailid: Locator;
private readonly password: Locator;
private readonly loginButton: Locator;
private readonly forgotPasswordLink: Locator;
private readonly logo: Locator;

constructor(page:Page) {
    super(page);
    this.emailid = page.getByRole('textbox', { name: 'E-Mail Address' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.forgotPasswordLink = page.getByRole('link', { name: 'Forgotten Password' }).first();
    this.logo = page.getByAltText('naveenopencart');
  }

//public page actions
async goToLoginPage(): Promise<void> {
    await this.page.goto('/opencart/index.php?route=account/login');
}

async getLoginPageTitle(): Promise<string> {
    return this.page.title();
}

async isForgotPasswordLinkExist(): Promise<boolean> {
    return this.forgotPasswordLink.isVisible();
}

async dologin(email: string, password: string): Promise<void> {
    await this.emailid.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
    }
}
