import { expect } from '@playwright/test';
import { LeftPanelNav } from '../components/LeftPanelNav';

export class ProfilePage {
  constructor(page) {
    this.page = page;
    this.loggedInUser = page.locator('#userName-value');
    this.logoutButton = page.locator('#submit');
    this.leftPanel = new LeftPanelNav(page);
  }

  async assertLoggedIn(email) {
    await expect(this.loggedInUser).toBeVisible();
    await expect(this.loggedInUser).toHaveText(email);
    await expect(this.logoutButton).toBeVisible();
    await expect(this.logoutButton).toHaveText(/^Log out$/);
  }

  async openBookStoreFromLeftNav() {
    await this.leftPanel.openBookStore();
  }

  async logout() {
    await this.logoutButton.click();
  }
}
