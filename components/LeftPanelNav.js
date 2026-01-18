export class LeftPanelNav {
  constructor(page) {
    this.page = page;
    this.root = page.locator('.left-pannel');
    this.bookStoreLink = this.root.getByText('Book Store', { exact: true });
  }

  async openBookStore() {
    await this.bookStoreLink.click();
  }
}
