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

    test('03. Confirm Email', async () => {
        await addvinpage.ConfirmEmail();
    });

    test('04. Login', async () => {
        await addvinpage.LoginIn();
    });

    test('05. Fill Individual Details Register', async () => {
        await bidderinvidualpage.IndividualDetails();
    });

    test('06. Complete Individual Registration Method', async () => {
        await bidderinvidualpage.IndividualRegistration();
    });

    test('07. Enter Addresses Details', async () => {
        await bidderinvidualpage.AddressDetails();
    });

    test('08. Bid Method', async () => {
        await bidderinvidualpage.DesiredBidLimit();
    });

    test('09. Upload Additional Method Documents', async () => {
        await bidderinvidualpage.AdditionalDocument();
    });

    test('10. Add Products Packages', async () => {
        await bidderinvidualpage.AddProducts();
    });

    test('11. Enter Card Details in Payment Page', async () => {
        await bidderinvidualpage.CardDetails();
    });

    test('12. Complete DocuSign Agreement', async () => {
        await bidderinvidualpage.PersonalDocuSign();
    });

    test('13. View Aggreement Created Bidder Opportunity', async () => {
        await bidderinvidualpage.ViewBidderOpportunity();
    });

    test.afterAll(async () => {
        console.log('All tests completed.');
        await page.close();         // browser stays open for debugging
        // await browser.close();   // uncomment if you want to close
    });

});
