import { test, expect } from '../fixtures/fixtures';
import { writeBookDetailsToFile } from '../utils/demoqa.util';

const BOOK_NAME = 'Learning JavaScript Design Patterns';
const USER_EMAIL = process.env.DEMOQA_USERNAME;
const USER_PASSWORD = process.env.DEMOQA_PASSWORD;

test.beforeEach(async ({ context, page }) => {
  await context.clearCookies();
  await page.goto('about:blank');
});

test('DemoQA UI flow – step by step', async ({
  page,
  homePage,
  bookStorePage,
  loginPage,
  profilePage,
}) => {
  
  await homePage.goto();
  await homePage.assertLoaded();
  await homePage.openBookStore();
  await bookStorePage.assertOnPage();
  await bookStorePage.openLogin();
  await loginPage.assertOnPage();
  await loginPage.login(USER_EMAIL, USER_PASSWORD);
  await profilePage.assertLoggedIn(USER_EMAIL);
  await profilePage.openBookStoreFromLeftNav();
  await bookStorePage.assertOnPage();
  await bookStorePage.searchForBook(BOOK_NAME);
  await bookStorePage.assertBookVisible(BOOK_NAME);
  const { title, author, publisher } =
    await bookStorePage.getBookDetails(BOOK_NAME);
  expect(title).toContain(BOOK_NAME);
  writeBookDetailsToFile(title, author, publisher);
  await profilePage.logout();
  await expect(page.locator('#login')).toBeVisible();
});
