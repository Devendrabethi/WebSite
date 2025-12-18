import { test } from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage.js'
import { AddMediaPage } from '../../Pages/AddMediaPage.js'
import { TitleDocument_Page } from '../../Pages/TitleDocument_Page.js'
import { ApplicationInfoPage } from '../../Pages/ApplicationInfoPage.js'

let browser
let context
let page

let addvinpage
let addmediapage
let titledocument_page
let applicationinfopage

test.describe('Consignment Individual Flow', () => {

    test.beforeAll(async ({ playwright }) => {
        // Launch browser
        browser = await playwright.chromium.launch()
        context = await browser.newContext()
        page = await context.newPage()

        // Initialize Page Objects
        addvinpage = new AddVinPage(page)
        addmediapage = new AddMediaPage(page)
        titledocument_page = new TitleDocument_Page(page)
        applicationinfopage = new ApplicationInfoPage(page)
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

    test('06. Select Power Source With Gasoline ', async () => {
        await addvinpage.PowerSource()
    })

    test('07. Enter Vehicle Details', async () => {
        await addvinpage.VehicleDetailstwo()
    })

    test('08. Vehicle Condition', async () => {
        await addvinpage.Mileage()
    })

    test('09. Enter Vehicle Short and Long Description', async () => {
        await addvinpage.VehicleDescp()
    })

    test('10. Uploading Media', async () => {
        await addmediapage.AdditionalPhotos()
    })

    test('11. Upload Vehicle Title Documents and Creating Personal Account in Appilicant page', async () => {
        await titledocument_page.VehicleDocument()
    })

    test('12. Additional Details In Finish Application', async () => {
        await applicationinfopage.FinishApplication()
    })

    test('13. Review Application', async () => {
        await applicationinfopage.ReviewApp()
    })

    test('14. View My Submission', async () => {
        await applicationinfopage.ViewMySubmission()
    })

    test('15. Open Consignment Dashboard verifying all tabs', async () => {
        await applicationinfopage.ConsignmentDashboardwithDocument()
    })

    test.afterAll(async () => {
        console.log('Individual Consignment Application Flow Completed.')
        await page.close()
        // await browser.close()   // enable if needed
    })

})
