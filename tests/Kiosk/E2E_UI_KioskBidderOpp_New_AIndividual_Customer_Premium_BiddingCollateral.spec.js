import { test } from '@playwright/test';
import { AddVinPage } from '../../Pages/AddVinPage';
import { BidderInvidualPage } from '../../Pages/BidderInvidualPage';
import { KioskPage } from '../../Pages/KioskPage';

let browser;
let context;
let page;
let addvinpage;
let bidderinvidualpage;
let kioskpage;

test.describe('Kiosk Bidder Opportunity - Individual Premium Package with DocuSign', () => {

    test.beforeAll(async ({ playwright }) => {
        // Launch the browser manually (same style as your personal account workflow)
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        // Initialize Page Objects
        addvinpage = new AddVinPage(page);
        bidderinvidualpage = new BidderInvidualPage(page);
        kioskpage = new KioskPage(page);
    });

    test('01. Start Premium Opportunity Flow', async () => {
        await kioskpage.BidderOpportunityPremium();
    });

    test('02. Start Premium Opportunity Flow', async () => {
        await kioskpage.SelfServiceModeWithPremium();
    });

    test('03. Create New Account', async () => {
        await kioskpage.KioskSignIn();
    });

    test('05. Confirm Email', async () => {
        await kioskpage.KioskForgotPassword();
    });
    test('06. Confirm Email', async () => {
        await kioskpage.KioskConfirm();
    });

    test('07. Login', async () => {
        await kioskpage.KioskLoginIn();
    });

    test('08. Selecting the package', async () => {
        await kioskpage.SelectPackage();
    });
    // test('05. Fill Individual Details Register', async () => {
    //     await bidderinvidualpage.IndividualDetails();
    // });

    // test('06. Complete Individual Registration Method', async () => {
    //     await bidderinvidualpage.IndividualRegistration();
    // });

    // test('07. Enter Addresses Details', async () => {
    //     await bidderinvidualpage.AddressDetails();
    // });

    // test('08. Bid Method', async () => {
    //     await bidderinvidualpage.DesiredBidLimit();
    // });

    // test('09. Upload Additional Method Documents', async () => {
    //     await bidderinvidualpage.AdditionalDocument();
    // });

    // test('10. Add Products Packages', async () => {
    //     await bidderinvidualpage.AddProducts();
    // });

    // test('11. Enter Card Details in Payment Page', async () => {
    //     await bidderinvidualpage.CardDetails();
    // });

    // test('12. Complete DocuSign Agreement', async () => {
    //     await bidderinvidualpage.PersonalDocuSign();
    // });

    // test('13. View Aggreement Created Bidder Opportunity', async () => {
    //     await bidderinvidualpage.ViewBidderOpportunity();
    // });

    test.afterAll(async () => {
        console.log('All tests completed.');
        await page.close();         // browser stays open for debugging
        // await browser.close();   // uncomment if you want to close
    });

});
