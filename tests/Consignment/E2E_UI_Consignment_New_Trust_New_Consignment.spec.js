import { test } from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage.js'
import { AddMediaPage } from '../../Pages/AddMediaPage.js'
import { ApplicationInfoPage } from '../../Pages/ApplicationInfoPage.js'
import { TrustPage } from '../../Pages/TrustPage.js'

let browser
let context
let page

let addvinpage
let addmediapage
let applicationinfopage
let trustpage

test.describe('Trust Consignment Flow', () => {

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch()
        context = await browser.newContext()
        page = await context.newPage()

        // Initialize Page Objects
        addvinpage = new AddVinPage(page)
        addmediapage = new AddMediaPage(page)
        applicationinfopage = new ApplicationInfoPage(page)
        trustpage = new TrustPage(page)
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

    test('06. Select Power Source (Diesel)', async () => {
        await addvinpage.PowerSourceDiesel()
    })

    test('07. Enter Mileage', async () => {
        await addvinpage.Mileage()
    })

    test('08. Enter Vehicle Description', async () => {
        await addvinpage.VehicleDescp()
    })

    test('09. Upload Additional Photos', async () => {
        // await addmediapage.MainPhotos();
        await addmediapage.AdditionalPhotos()
    })

    test('10. Create Trust Account and Upload Trust Vehicle Documents', async () => {
        await trustpage.TrustVehicleDocument()
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

    test('14. Open Consignment Dashboard (With Documents)', async () => {
        await applicationinfopage.ConsignmentDashboardwithDocument()
    })

    test.afterAll(async () => {
        console.log('Trust Consignment Flow Completed.')
        await page.close()
        // await browser.close() // enable if desired
    })

})
