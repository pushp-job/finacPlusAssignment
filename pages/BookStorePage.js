import { expect } from '@playwright/test';

export class BookStorePage {
  constructor(page) {
    this.page = page;
    this.loginButton = page.locator('#login');
    this.searchBox = page.locator('#searchBox');
  }

  async assertOnPage() {
    await expect(this.page).toHaveURL(/\/books/);
  }

  async openLogin() {
    await this.loginButton.click();
  }

  async searchForBook(bookName) {
    await expect(this.searchBox).toBeVisible();
    await this.searchBox.fill(bookName);
  }

  async assertBookVisible(bookName) {
    await expect(
      this.page.getByRole('link', { name: bookName })
    ).toBeVisible();
  }

  async getBookDetails(bookName) {
    const row = this.page.locator('.rt-tr-group').filter({
      has: this.page.locator('a', { hasText: bookName }),
    });

    await expect(row).toHaveCount(1);

    const cells = row.locator('.rt-td');
    const title = (await cells.nth(1).innerText()).trim();
    const author = (await cells.nth(2).innerText()).trim();
    const publisher = (await cells.nth(3).innerText()).trim();

    return { title, author, publisher };
  }
}
