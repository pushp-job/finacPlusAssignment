import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { BookStorePage } from '../pages/BookStorePage';
import { LoginPage } from '../pages/LoginPage';
import { ProfilePage } from '../pages/ProfilePage';

export const test = base.extend({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  bookStorePage: async ({ page }, use) => {
    await use(new BookStorePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  profilePage: async ({ page }, use) => {
    await use(new ProfilePage(page));
  },
});

export { expect };
