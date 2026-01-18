import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.userNameInput = page.locator('#userName');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login');
  }

  async assertOnPage() {
    await expect(this.page).toHaveURL(/\/login/);
  }

  async login(email, password) {
    await this.userNameInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
