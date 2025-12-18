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

test.describe('Dealer Consignment Flow', () => {

    test.beforeAll(async ({ playwright }) => {
        // Launch browser
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

    test('05. Enter Vehicle VIN', async () => {
        await addvinpage.VehicleDetailsone()
    })

    test('06. Select Power Source (Electric) and Vehicle Details', async () => {
        await addvinpage.PowerSourceElectric()
    })

    test('07.  Vehicle Condition', async () => {
        await addvinpage.Mileage()
    })

    test('08. Enter Vehicle Short and Long Description', async () => {
        await addvinpage.VehicleDescp()
    })

    test('09. Uploading Media', async () => {
        // await addmediapage.MainPhotos();
        await addmediapage.AdditionalPhotos()
    })

    test('10. Upload Vehicle Title Documents and Creating Dealer Account in Appilicant page and Creating Personal Account', async () => {
        await dealerpage.DealerVehicleDocument()
    })

    test('11. Additional Details In Finish Application', async () => {
        await applicationinfopage.FinishApplication()
    })

    test('12. Review Application', async () => {
        await applicationinfopage.ReviewApp()
    })

    test('13. View My Submission', async () => {
        await applicationinfopage.ViewMySubmission()
    })

    test('14. Open Consignment Dashboard and Verifying all tab in Dashboard', async () => {
        await applicationinfopage.ConsignmentDashboardwithDocument()
    })

    test.afterAll(async () => {
        console.log('Dealer Consignment Flow Completed.')
        await page.close()
        // await browser.close() // enable if needed
    })

})
