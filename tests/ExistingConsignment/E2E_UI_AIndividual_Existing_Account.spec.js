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

test.describe('Existing Account for Individual Consignment Flow', () => {

    test.beforeAll(async ({ playwright }) => {
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

    test('02. Sign In with Existing Account', async () => {
        await addvinpage.ExistingAccount()
    })

    test('03. Fill Vehicle Details - Part 1', async () => {
        await addvinpage.VehicleDetailsone()
        await addvinpage.PowerSource()
    })

    test('04. Fill Vehicle Details - Part 2', async () => {
        await addvinpage.VehicleDetailstwo()
        await addvinpage.Mileage()
        await addvinpage.VehicleDescp()
    })

    test('05. Upload Additional Photos', async () => {
        // await addmediapage.MainPhotos(); // optional
        await addmediapage.AdditionalPhotos()
    })

    test('06. Upload Existing Vehicle Documents', async () => {
        await titledocument_page.ExistingVehicleDocument()
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
        console.log('Individual Consignment Flow Completed.')
        await page.close()
        // await browser.close() // enable if desired
    })

})
