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

    // test('Confirm Email', async () => {
    //     await addvinpage.ConfirmEmail()
    // })

    // test('Login', async () => {
    //     await addvinpage.LoginIn()
    // })

    test('03. Enter Vehicle Details Part 1', async () => {
        await addvinpage.VehicleDetailsone()
    })

    test('04. Select Power Source', async () => {
        await addvinpage.PowerSource()
    })

    test('05. Enter Vehicle Details Part 2', async () => {
        await addvinpage.VehicleDetailstwo()
    })

    test('06. Enter Mileage', async () => {
        await addvinpage.Mileage()
    })

    test('07. Enter Vehicle Description', async () => {
        await addvinpage.VehicleDescp()
    })

    test('08. Upload Additional Photos', async () => {
        await addmediapage.AdditionalPhotos()
    })

    test('09. Upload Vehicle Documents', async () => {
        await titledocument_page.VehicleDocument()
    })

    test('10. Finish Application', async () => {
        await applicationinfopage.FinishApplication()
    })

    test('11. Review Application', async () => {
        await applicationinfopage.ReviewApp()
    })

    test('12. View Submission', async () => {
        await applicationinfopage.ViewMySubmission()
    })

    test('13. Open Consignment Dashboard (With Documents)', async () => {
        await applicationinfopage.ConsignmentDashboardwithDocument()
    })

    test.afterAll(async () => {
        console.log('Individual Consignment Application Flow Completed.')
        await page.close()
        // await browser.close()   // enable if needed
    })

})
