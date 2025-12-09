// import{test} from '@playwright/test'
// import { AddVinPage } from '../../Pages/AddVinPage'
// import { AddMediaPage } from '../../Pages/AddMediaPage'
// import { ApplicationInfoPage } from '../../Pages/ApplicationInfoPage'
// import { DealerPage } from '../../Pages/DealerPage'
// import { TrustPage } from '../../Pages/TrustPage'

// test('Creating Dealer Consignment without documents on flow and uploading documents in dashboard', async ({ page }) => {

//   const addvinpage = new AddVinPage(page);
//   const addmediapage = new AddMediaPage(page);
//   const applicationinfopage = new ApplicationInfoPage(page);
//   const dealerpage = new DealerPage(page);

//   await test.step("1. Open Consignment URL", async () => {
//     await addvinpage.ConsignmentURL();
//   });

//   await test.step("2. Creating new account", async () => {
//     await addvinpage.SignIn();
//   });

//   // await test.step("Confirm Email", async () => {
//   //   await addvinpage.ConfirmEmail();
//   // });

//   //  await test.step("Login", async () => {
//   //   await addvinpage.LoginIn();
//   // });

//   await test.step("3. Enter Vehicle Details (Part 1)", async () => {
//     await addvinpage.VehicleDetailsone();
//   });

//   await test.step("4. Select Power Source (Electric)", async () => {
//     await addvinpage.PowerSourceElectric();
//   });

//   await test.step("5. Enter Mileage", async () => {
//     await addvinpage.Mileage();
//   });

//   await test.step("6. Enter Vehicle Description", async () => {
//     await addvinpage.VehicleDescp();
//   });

//   await test.step("7. Upload Additional Photos", async () => {
//     await addmediapage.AdditionalPhotos();
//   });

//   await test.step("8. Creating Dealer account and Skip Dealer Documents (Upload from Dashboard)", async () => {
//     await dealerpage.DealerWithoutDocUploadingfromDashboard();
//   });

//   await test.step("9. Finish Application", async () => {
//     await applicationinfopage.FinishApplication();
//   });

//   await test.step("10. Review Application", async () => {
//     await applicationinfopage.ReviewApp();
//   });

//   await test.step("11. View Submission", async () => {
//     await applicationinfopage.ViewMySubmission();
//   });

//   await test.step("12. Open Consignment Dashboard Without Documents", async () => {
//     await applicationinfopage.ConsignmentDashboardwithoutDocument();
//   });

// });
import { test } from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage.js'
import { AddMediaPage } from '../../Pages/AddMediaPage.js'
import { ApplicationInfoPage } from '../../Pages/ApplicationInfoPage.js'
import { DealerPage } from '../../Pages/DealerPage.js'

let browser
let context
let page

let addvinpage
let addmediapage
let applicationinfopage
let dealerpage

test.describe('Dealer Consignment Flow Without Documents (Upload Document from Dashboard)', () => {

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch()
        context = await browser.newContext()
        page = await context.newPage()

        // Initialize Page Objects
        addvinpage = new AddVinPage(page)
        addmediapage = new AddMediaPage(page)
        applicationinfopage = new ApplicationInfoPage(page)
        dealerpage = new DealerPage(page)
    })

    test('01. Open Consignment URL', async () => {
        await addvinpage.ConsignmentURL()
    })

    test('02. Create New Account', async () => {
        await addvinpage.SignIn()
    })

    test.skip('03. Confirm Email', async () => {
        await addvinpage.ConfirmEmail()
    })

    test.skip('04. Login', async () => {
        await addvinpage.LoginIn()
    })

    test('05. Enter Vehicle Details (Part 1)', async () => {
        await addvinpage.VehicleDetailsone()
    })

    test('06. Select Power Source (Electric)', async () => {
        await addvinpage.PowerSourceElectric()
    })

    test('07. Enter Mileage', async () => {
        await addvinpage.Mileage()
    })

    test('08. Enter Vehicle Description', async () => {
        await addvinpage.VehicleDescp()
    })

    test('09. Upload Additional Photos', async () => {
        await addmediapage.AdditionalPhotos()
    })

    test('10. Create Dealer Account and Skip Documents (Upload Later from Dashboard)', async () => {
        await dealerpage.DealerWithoutDocUploadingfromDashboard()
    })

    test('11. Finish Application', async () => {
        await applicationinfopage.FinishApplication()
    })

    test('12. Review Application', async () => {
        await applicationinfopage.ReviewApp()
    })

    test('13. View Submission', async () => {
        await applicationinfopage.ViewMySubmission()
    })

    test('14. Open Consignment Dashboard Without Documents', async () => {
        await applicationinfopage.ConsignmentDashboardwithoutDocument()
    })

    test.afterAll(async () => {
        console.log('Dealer Consignment Flow Without Documents Completed.')
        await page.close()
        // await browser.close() // enable if desired
    })

})
