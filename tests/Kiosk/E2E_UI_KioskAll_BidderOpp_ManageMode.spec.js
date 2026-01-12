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

test.describe('Kiosk Bidder Opportunity with manage mode- Individual With Premium Package, Business with Select Package and Dealer with Absentee Package', () => {

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
        await kioskpage.ManageMode();
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

    test('09. Fill Individual Details Register', async () => {
        await kioskpage.BidderRegister();
    });

    test('10. Complete Individual Registration Method', async () => {
        await bidderinvidualpage.IndividualRegistration();
    });

    test('11. Enter Addresses Details', async () => {
        await bidderinvidualpage.AddressDetails();
    });

    test('12. Bid Method', async () => {
        await bidderinvidualpage.DesiredBidLimit();
    });

    test('13. Upload Additional Method Documents', async () => {
        await kioskpage.AdditionalDocument();
    });

    test('14. Add Products Packages', async () => {
        await bidderinvidualpage.AddProducts();
    });

    test('15. Enter Card Details in Payment Page', async () => {
        await bidderinvidualpage.CardDetails();
    });

    test('16. Complete DocuSign Agreement', async () => {
        await bidderinvidualpage.PersonalDocuSign();
    });

    test('17. Logout and Created new Bidder Opportunity', async () => {
        await kioskpage.CreateNewRegistration();
    });

    // test('18. Create New Account', async () => {
    //     await kioskpage.KioskSignIn();
    // });

    test.skip('19. Confirm Email and Forgot passowrd', async () => {
        await kioskpage.KioskForgotPassword();
    });
    test.skip('20. Forgot Email confirmation through mail', async () => {
        await kioskpage.KioskConfirm();
    });

    test.skip('21. Login', async () => {
        await kioskpage.KioskLoginIn();
    });

    test('22. Selecting the Premium package', async () => {
        await kioskpage.SelectPackage();
    });

    test('23. Fill Individual Details Register', async () => {
        await kioskpage.BidderRegister();
    });

    test('24. Complete Business Registration Method', async () => {
        await bidderbusinesspage.BusinessRegistration();
    });

    test('25. Enter Addresses Details', async () => {
        await bidderinvidualpage.AddressDetails();
    });

    test('26. Bid Method', async () => {
        await bidderinvidualpage.DesiredBidLimit();
    });

    test('27. Upload Additional Method Documents and Business Documents', async () => {
        await kioskpage.AdditionalDocument();
        await kioskpage.BusinessDocument();
    });

    test('28. Add Products Packages', async () => {
        await bidderinvidualpage.AddProducts();
    });

    test('29. Enter Card Details in Payment Page', async () => {
        await bidderinvidualpage.CardDetails();
    });

    test('30. Complete DocuSign Agreement', async () => {
        await bidderinvidualpage.PersonalDocuSign();
    });

    test('31. Logout and Created new Bidder Opportunity', async () => {
        await kioskpage.CreateNewRegistration();
    });

    // test('32. Create New Account', async () => {
    //     await kioskpage.KioskSignIn();
    // });

    test.skip('33. Confirm Email and Forgot passowrd', async () => {
        await kioskpage.KioskForgotPassword();
    });
    test.skip('34. Forgot Email confirmation through mail', async () => {
        await kioskpage.KioskConfirm();
    });

    test.skip('35. Login', async () => {
        await kioskpage.KioskLoginIn();
    });

    test('36. Selecting the Premium package', async () => {
        await kioskpage.AbsenteePackage();
    });

    test('37. Fill Individual Details Register', async () => {
        await kioskpage.BidderRegister();
    });

    test('38. Complete Dealer Registration Method', async () => {
        await bidderdealerpage.DealerRegistration()
    })

    test('39. Enter Addresses Details', async () => {
        await bidderinvidualpage.AddressDetails();
    });

    test('40. Bid Method with CC Deposit', async () => {
        await bidderdealerpage.CCDepositeDesiredBidLimit();
    });

    test('41. Upload Additional Documents and Dealer Documents', async () => {
        await kioskpage.AdditionalDocument();
        await kioskpage.DealerDocument()
    })

    // test('42. Add Products Packages', async () => {
    //     await bidderinvidualpage.AddProducts();
    // });

    test('43. Enter Card Details in Payment Page', async () => {
        await bidderinvidualpage.CardDetails();
    });

    test('44. Complete DocuSign Agreement', async () => {
        await bidderinvidualpage.AbsenteeDocuSign();
    });

    test('45. Enter Dealer CC Deposit Card Details', async () => {
        await bidderdealerpage.CCDepositeCardDetails();
    });

    test('46. Logout and Created new Bidder Opportunity', async () => {
        await kioskpage.CreateNewRegistration();
    });

    test('47. Diabling KIosk Mode', async () => {
        await kioskpage.DisableKiosk();
    });

    test.afterAll(async () => {
        console.log('All tests completed.');
        await page.close();         // browser stays open for debugging
        // await browser.close();   // uncomment if you want to close
    });

});
