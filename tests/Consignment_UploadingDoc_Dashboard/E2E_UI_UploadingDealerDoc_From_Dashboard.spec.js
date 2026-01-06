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

    test('03. Confirm Email', async () => {
        await addvinpage.ConfirmEmail()
    })

    test('04. Login', async () => {
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
