import { test } from '@playwright/test';
import { AddVinPage } from '../../Pages/AddVinPage';
import { BidderInvidualPage } from '../../Pages/BidderInvidualPage';
import { BidderBusinessPage } from '../../Pages/BidderBusinessPage';

let browser;
let context;
let page;

let addvinpage;
let bidderinvidualpage;
let bidderbusinesspage;

test.describe('Bidder Opportunity - Business with Select Package', () => {

    test.beforeAll(async ({ playwright }) => {
        // Launch browser manually
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        // Initialize page objects
        addvinpage = new AddVinPage(page);
        bidderinvidualpage = new BidderInvidualPage(page);
        bidderbusinesspage = new BidderBusinessPage(page);
    });

    test('01. Start Business Select Package Opportunity', async () => {
        await bidderbusinesspage.BidderOpportunitySelect();
    });

    test('02. Create New Account', async () => {
        await addvinpage.SignIn();
    });

    test.skip('03. Confirm Email', async () => {
        await addvinpage.ConfirmEmail();
    });

    test.skip('04. Login', async () => {
        await addvinpage.LoginIn();
    });

    test('05. Enter Individual Details Register', async () => {
        await bidderinvidualpage.IndividualDetails();
    });

    test('06. Complete Business Registration Method', async () => {
        await bidderbusinesspage.BusinessRegistration();
    });

    test('07. Enter Addresses Details', async () => {
        await bidderinvidualpage.AddressDetails();
    });

    test('08. Bid Method', async () => {
        await bidderbusinesspage.DesiredBidLimit();
    });

    test('09. Upload Additional Method Documents', async () => {
        await bidderinvidualpage.AdditionalDocument();
    });

    test('10. Upload Business Documents', async () => {
        await bidderbusinesspage.BusinessDocument();
    });

    test('11. Add Products Packages', async () => {
        await bidderinvidualpage.AddProducts();
    });

    test('12.  Enter Card Details in Payment Page', async () => {
        await bidderinvidualpage.CardDetails();
    });

    test('13. Complete DocuSign Agreement', async () => {
        await bidderinvidualpage.PersonalDocuSign();
    });

    test('14. View Aggreement Created Bidder Opportunity', async () => {
        await bidderinvidualpage.ViewBidderOpportunity();
    });

    test.afterAll(async () => {
        console.log('All tests completed.');
        await page.close(); 
        // await browser.close(); // Uncomment to close browser completely
    });

});
