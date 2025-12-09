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

test.describe('Existing Account for Dealer Consignment Flow', () => {

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

    test('02. Sign In with Existing Account', async () => {
        await addvinpage.ExistingAccount()
    })

    test('03. Fill Vehicle Details - Part 1', async () => {
        await addvinpage.VehicleDetailsone()
        await addvinpage.PowerSourceElectric()
    })

    test('04. Fill Vehicle Details - Part 2', async () => {
        await addvinpage.Mileage()
        await addvinpage.VehicleDescp()
    })

    test('05. Upload Additional Photos', async () => {
        // await addmediapage.MainPhotos(); // optional
        await addmediapage.AdditionalPhotos()
    })

    test('06. Creating Dealer Account and Upload Existing Dealer Vehicle Documents', async () => {
        await dealerpage.AlreadyDealerVehicleDocument()
    })

    test('07. Finish Application', async () => {
        await applicationinfopage.FinishApplication()
    })

    test('08. Review Application', async () => {
        await applicationinfopage.ReviewApp()
    })

    test('09. View My Submission', async () => {
        await applicationinfopage.ViewMySubmission()
    })

    test('10. Verify Consignment Dashboard with Document', async () => {
        await applicationinfopage.ConsignmentDashboardwithDocument()
    })

    test.afterAll(async () => {
        console.log('Dealer Consignment Flow Completed.')
        await page.close()
        // await browser.close() // enable if desired
    })

})
