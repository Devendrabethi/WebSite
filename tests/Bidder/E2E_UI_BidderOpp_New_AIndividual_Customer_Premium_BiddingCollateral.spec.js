import { test } from '@playwright/test';
import { AddVinPage } from '../../Pages/AddVinPage';
import { BidderInvidualPage } from '../../Pages/BidderInvidualPage';

let browser;
let context;
let page;
let addvinpage;
let bidderinvidualpage;

test.describe('Bidder Opportunity - Individual Premium Package with DocuSign', () => {

    test.beforeAll(async ({ playwright }) => {
        // Launch the browser manually (same style as your personal account workflow)
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        // Initialize Page Objects
        addvinpage = new AddVinPage(page);
        bidderinvidualpage = new BidderInvidualPage(page);
    });

    test('01. Start Premium Opportunity Flow', async () => {
        await bidderinvidualpage.BidderOpportunityPremium();
    });

    test('02. Create New Account', async () => {
        await addvinpage.SignIn();
    });

    // test('Confirm Email', async () => {
    //     await addvinpage.ConfirmEmail();
    // });

    // test('Login', async () => {
    //     await addvinpage.LoginIn();
    // });

    test('03. Fill Individual Details', async () => {
        await bidderinvidualpage.IndividualDetails();
    });

    test('04. Complete Registration', async () => {
        await bidderinvidualpage.IndividualRegistration();
    });

    test('05. Enter Address Details', async () => {
        await bidderinvidualpage.AddressDetails();
    });

    test('06. Desired Bid Limit', async () => {
        await bidderinvidualpage.DesiredBidLimit();
    });

    test('07. Upload Additional Documents', async () => {
        await bidderinvidualpage.AdditionalDocument();
    });

    test('08. Add Products', async () => {
        await bidderinvidualpage.AddProducts();
    });

    test('09. Enter Card Details', async () => {
        await bidderinvidualpage.CardDetails();
    });

    test('10. Complete DocuSign', async () => {
        await bidderinvidualpage.PersonalDocuSign();
    });

    test('11. View Opportunity', async () => {
        await bidderinvidualpage.ViewBidderOpportunity();
    });

    test.afterAll(async () => {
        console.log('All tests completed.');
        await page.close();         // browser stays open for debugging
        // await browser.close();   // uncomment if you want to close
    });

});
