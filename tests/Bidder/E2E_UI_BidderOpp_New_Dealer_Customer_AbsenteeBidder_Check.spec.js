import { test } from '@playwright/test';
import { AddVinPage } from '../../Pages/AddVinPage';
import { BidderInvidualPage } from '../../Pages/BidderInvidualPage';
import { BidderDealerPage } from '../../Pages/BidderDealerPage';

let browser;
let context;
let page;

let addvinpage;
let bidderinvidualpage;
let bidderdealerpage;

test.describe('Bidder Opportunity - Dealer with Absentee Package', () => {

    test.beforeAll(async ({ playwright }) => {
        // Launch browser manually
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        // Initialize Page Objects
        addvinpage = new AddVinPage(page);
        bidderinvidualpage = new BidderInvidualPage(page);
        bidderdealerpage = new BidderDealerPage(page);
    });

    test('01. Start Dealer Absentee Package Opportunity', async () => {
        await bidderdealerpage.BidderOpportunityAbsentee();
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

    test('05. Confirm Absentee Package Selection', async () => {
        await bidderdealerpage.BidderOpportunityAbsenteeyes();
    });

    test('06. Enter Individual Details', async () => {
        await bidderinvidualpage.IndividualDetails();
    });

    test('07. Complete Dealer Registration', async () => {
        await bidderdealerpage.DealerRegistration();
    });

    test('08. Enter Address Details', async () => {
        await bidderinvidualpage.AddressDetails();
    });

    test('09. Set Desired Bid Limit / CC Deposit', async () => {
        await bidderdealerpage.CCDepositeDesiredBidLimit();
    });

    test('10. Upload Individual Documents', async () => {
        await bidderinvidualpage.AdditionalDocument();
    });

    test('11. Upload Dealer Documents', async () => {
        await bidderdealerpage.DealerDocument();
    });

    // If Add Products is not required for Dealer Absentee, keep commented
    // test('Add Products', async () => {
    //     await bidderinvidualpage.AddProducts();
    // });

    test('12. Enter Card Details (Individual)', async () => {
        await bidderinvidualpage.CardDetails();
    });

    test('13. Complete Absentee DocuSign', async () => {
        await bidderinvidualpage.AbsenteeDocuSign();
    });

    test('14. Enter Dealer CC Deposit Card Details', async () => {
        await bidderdealerpage.CCDepositeCardDetails();
    });

    test.afterAll(async () => {
        console.log('Dealer Absentee workflow completed.');
        await page.close();     
        // await browser.close(); // Uncomment if you want to close browser
    });

});
