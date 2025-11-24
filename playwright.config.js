// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from "dotenv"

dotenv.config({
  path: process.env.TEST_ENV ?`./env-files/.env.${process.env.TEST_ENV}` : `./env-files/.env.hotfixqa`  // TEST_ENV is the variable name 
  //path:`./env-files/.env.${process.env.TEST_ENV}` // direct from terminal
})

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  timeout:18000000,
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["html"], ["allure-playwright"]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
     actionTimeout: 30000, // Max time for each action like click, fill etc.
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    headless: false, //falese means we can see browser
     video: 'on',
    screenshot :'on',
    trace: 'on'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],    viewport: { width: 1920, height: 950 } },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'],    viewport: { width: 1920, height: 950 } },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'],    viewport: { width: 1920, height: 950 } },
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },

    /* Test against branded browsers. */
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' ,    viewport: { width: 1920, height: 950 }},
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' ,      viewport: { width: 1920, height: 950 }},

    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});