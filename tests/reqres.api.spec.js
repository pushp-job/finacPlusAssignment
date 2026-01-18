const { test, expect } = require('@playwright/test');
const {
  createUser,
  generateToken,
  getUserById,
} = require('../utils/demoqa.api');
const { appendUserRecord, readLatestUserRecord } = require('../utils/userStore');

const USER_PASSWORD = process.env.DEMOQA_API_PASSWORD;

test('DemoQA API: Create user and store userId in file', async ({ request }) => {
  const username = `test${Date.now()}@gmail.com`;
  const password = USER_PASSWORD;
  const payload = { userName: username, password };
  const res = await createUser(request, payload);
  expect(res.status()).toBe(201);
  const body = await res.json();
  expect(body.userID).toBeTruthy();
  expect(body.username).toBe(username);
  expect(Array.isArray(body.books)).toBe(true);
  const userId = body.userID;
  const record = {
    createdAt: new Date().toISOString(),
    userId,
    username,
  };
  const filePath = appendUserRecord(record);
  console.log('✅ Stored user in:', filePath);
  console.log('✅ userId:', userId);
});

test('DemoQA API: Login and get created user details', async ({ request }) => {
  const lastRecord = readLatestUserRecord();
  const { userId, username } = lastRecord;
  const tokenRes = await generateToken(request, {
    userName: username,
    password: USER_PASSWORD,
  });
  expect(tokenRes.status()).toBe(200);
  const tokenBody = await tokenRes.json();
  expect(tokenBody.status).toBe('Success');
  expect(tokenBody.token).toBeTruthy();
  const token = tokenBody.token;
  const getUserRes = await getUserById(request, userId, token);
  expect(getUserRes.status()).toBe(200);
  const getUserBody = await getUserRes.json();
  expect(getUserBody.userId).toBe(userId);
  expect(getUserBody.username).toBe(username);
  expect(Array.isArray(getUserBody.books)).toBe(true);
  expect(getUserBody.books.length).toBeGreaterThanOrEqual(0);
  console.log('✅ User details fetched and validated successfully');
});
