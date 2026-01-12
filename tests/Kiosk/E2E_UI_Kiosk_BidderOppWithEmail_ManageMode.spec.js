import { test } from '@playwright/test';
import { AddVinPage } from '../../Pages/AddVinPage.js';
import { BidderInvidualPage } from '../../Pages/BidderInvidualPage.js';
import { KioskPage } from '../../Pages/KioskPage.js';
import { BidderBusinessPage } from '../../Pages/BidderBusinessPage.js';
import { BidderDealerPage } from '../../Pages/BidderDealerPage.js'

let browser;
let context;
let page;
let addvinpage;
let bidderinvidualpage;
let kioskpage;
let bidderbusinesspage;
let bidderdealerpage
//Driver License must and No Customer Photo
test.describe('Kiosk Bidder Opportunity with manage mode- Individual With Premium Package with exist email', () => {

    test.beforeAll(async ({ playwright }) => {
        // Launch the browser manually (same style as your personal account workflow)
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        // Initialize Page Objects
        addvinpage = new AddVinPage(page);
        bidderinvidualpage = new BidderInvidualPage(page);
        bidderbusinesspage = new BidderBusinessPage(page);
        bidderdealerpage = new BidderDealerPage(page)
        kioskpage = new KioskPage(page);
    });

    test('01. Start Premium Opportunity Flow', async () => {
        await kioskpage.BidderOpportunity();
    });

    test('02. Selecting self service mode', async () => {
        await kioskpage.WithExistingEmail_ManageMode();
    });

    // test('03. Create New Account', async () => {
    //     await kioskpage.KioskSignIn();
    // });

    test.skip('05. Confirm Email and Forgot passowrd', async () => {
        await kioskpage.KioskForgotPassword();
    });
    test.skip('06. Forgot Email confirmation through mail', async () => {
        await kioskpage.KioskConfirm();
    });

    test.skip('07. Login', async () => {
        await kioskpage.KioskLoginIn();
    });

    test('08. Selecting the Premium package', async () => {
        await kioskpage.SelectPremiumPackage();
    });

    test.skip('09. Fill Individual Details Register', async () => {
        await kioskpage.BidderRegister();
    });

     test('10. Fill Individual Details Prepopulate', async () => {
        await kioskpage.WithExistingDetailPrePopulate();
    });

    test('11. Complete Individual Registration Method', async () => {
        await bidderinvidualpage.IndividualRegistration();
    });

    test('12. Enter Addresses Details', async () => {
        await bidderinvidualpage.AddressDetails();
    });

    test('13. Bid Method', async () => {
        await bidderinvidualpage.DesiredBidLimit();
    });

    test('14. Upload Additional Method Documents', async () => {
        await kioskpage.AdditionalDocument();
    });

    test('15. Add Products Packages', async () => {
        await bidderinvidualpage.AddProducts();
    });

    test('16. Enter Card Details in Payment Page', async () => {
        await bidderinvidualpage.CardDetails();
    });

    test('17. Complete DocuSign Agreement', async () => {
        await bidderinvidualpage.PersonalDocuSign();
    });

    test('18. Logout and Created new Bidder Opportunity', async () => {
        await kioskpage.CreateNewRegistration();
    });

    test('19. Diabling KIosk Mode', async () => {
        await kioskpage.DisableKiosk();
    });

    test.afterAll(async () => {
        console.log('All tests completed.');
        await page.close();         // browser stays open for debugging
        // await browser.close();   // uncomment if you want to close
    });

});
