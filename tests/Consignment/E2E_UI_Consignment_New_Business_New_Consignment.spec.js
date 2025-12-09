import { test } from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage.js'
import { AddMediaPage } from '../../Pages/AddMediaPage.js'
import { ApplicationInfoPage } from '../../Pages/ApplicationInfoPage.js'
import { BusinessPage } from '../../Pages/BusinessPage.js'

let browser
let context
let page

let addvinpage
let addmediapage
let applicationinfopage
let businesspage

test.describe('Business Consignment Flow', () => {

    test.beforeAll(async ({ playwright }) => {
        // Launch browser
        browser = await playwright.chromium.launch()
        context = await browser.newContext()
        page = await context.newPage()

        // Initialize Page Objects
        addvinpage = new AddVinPage(page)
        addmediapage = new AddMediaPage(page)
        applicationinfopage = new ApplicationInfoPage(page)
        businesspage = new BusinessPage(page)
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

    test('03. Enter Vehicle Details (Part 1)', async () => {
        await addvinpage.VehicleDetailsone()
    })

    test('04. Select Power Source (Hybrid)', async () => {
        await addvinpage.PowerSourceHyBrid()
    })

    test('05. Enter Mileage', async () => {
        await addvinpage.Mileage()
    })

    test('06. Enter Vehicle Description', async () => {
        await addvinpage.VehicleDescp()
    })

    test('07. Upload Additional Photos', async () => {
        // await addmediapage.MainPhotos();
        await addmediapage.AdditionalPhotos()
    })

    test('08. Create Business Account and Upload Vehicle Documents', async () => {
        await businesspage.BusinessVehicleDocument()
    })

    test('09. Finish Application', async () => {
        await applicationinfopage.FinishApplication()
    })

    test('10. Review Application', async () => {
        await applicationinfopage.ReviewApp()
    })

    test('11. View Submission', async () => {
        await applicationinfopage.ViewMySubmission()
    })

    test('12. Open Consignment Dashboard (With Documents)', async () => {
        await applicationinfopage.ConsignmentDashboardwithDocument()
    })

    test.afterAll(async () => {
        console.log('Business Consignment Flow Completed.')
        await page.close()
        // await browser.close() // enable if needed
    })

})
