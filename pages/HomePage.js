import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.elementsHeading = page.getByRole('heading', { name: 'Elements' });
    this.bookStoreCard = page.getByRole('heading', {
      name: 'Book Store Application',
    });
  }

  async goto() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
  }

  async assertLoaded() {
    await expect(this.elementsHeading).toBeVisible();
  }

  async openBookStore() {
    await this.bookStoreCard.click();
  }
}
