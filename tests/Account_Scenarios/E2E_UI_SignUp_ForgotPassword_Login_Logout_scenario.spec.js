import { test } from '@playwright/test';
import { AddVinPage } from '../../Pages/AddVinPage';

let browser;
let context;
let page;
let addvinpage;

test.describe('Consignment Account Creation Workflow', () => {

    test.beforeAll(async ({ playwright }) => {
        // Launch browser manually (same style as second example)
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        // Initialize Page Objects
        addvinpage = new AddVinPage(page);
    });

    test('01. Open Consignment URL', async () => {
        await addvinpage.ConsignmentURL();
    });

    test('02. Creating new account', async () => {
        await addvinpage.SignIn();
    });

    test('03. Confirm Email', async () => {
        await addvinpage.ConfirmEmail();
    });

    test('04. Forgot password → Reset → Sign In', async () => {
        await addvinpage.Forgotpassword();
    });

    test('05. Logout', async () => {
        await addvinpage.LogOut();
    });

    test.afterAll(async () => {
        console.log('All tests completed.');
        await page.close();
        // await browser.close(); // uncomment to close browser fully
    });

});
