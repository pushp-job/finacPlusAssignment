import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,

  use: {
    baseURL: 'https://demoqa.com',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },

  reporter: [['html', { open: 'never' }]],
});