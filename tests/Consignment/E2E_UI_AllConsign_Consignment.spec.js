import { test } from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage.js'
import { AddMediaPage } from '../../Pages/AddMediaPage.js'
import { TitleDocument_Page } from '../../Pages/TitleDocument_Page.js'
import { ApplicationInfoPage } from '../../Pages/ApplicationInfoPage.js'
import { BusinessPage } from '../../Pages/BusinessPage.js'
import { DealerPage } from '../../Pages/DealerPage.js'
import { TrustPage } from '../../Pages/TrustPage.js'

let browser
let context
let page

let addvinpage
let addmediapage
let titledocument_page
let applicationinfopage
let businesspage
let dealerpage
let trustpage

test.describe('Consignment Flow for Individual, Business, Dealer, Trust consignment', () => {

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
        businesspage = new BusinessPage(page)
        dealerpage = new DealerPage(page)
        trustpage = new TrustPage(page)
    })

    // ----------------------------------------------------------
    // 🌟  INDIVIDUAL APPLICATION
    // ----------------------------------------------------------
    
    test('01. Individual: Consignment URL', async () => {
        await addvinpage.ConsignmentURL()
    })

    test('02. Individual: Create New Account', async () => {
        await addvinpage.SignIn()
    })

    test.skip('03. Confirm Email', async () => {
        await addvinpage.ConfirmEmail()
    })

    test.skip('04. Login', async () => {
        await addvinpage.LoginIn()
    })

    test('05. Individual: Enter Vehicle Details (VIN, Power Source, Condition, Description', async () => {
        await addvinpage.VehicleDetailsone()
        await addvinpage.PowerSource()
        await addvinpage.VehicleDetailstwo()
        await addvinpage.Mileage()
        await addvinpage.VehicleDescp()
    })

    test('06. Individual: Uploading Media', async () => {
        await addmediapage.AdditionalPhotos()
    })

    test('07. Individual: Upload Vehicle Title Documents and Creating Personal Account in Appilicant page', async () => {
        await titledocument_page.VehicleDocument()
    })

    test('08. Individual: Additional Details In Finish Application and Review', async () => {
        await applicationinfopage.FinishApplication()
        await applicationinfopage.ReviewApp()
    })

    // ----------------------------------------------------------
    // 🌟  BUSINESS APPLICATION
    // ----------------------------------------------------------

    test('09. Business: Start Another Application', async () => {
        await businesspage.StartAnotherApp()
    })

    test('10. Business: Enter Vehicle Details (VIN, Power Source, Condition, Description', async () => {
        await addvinpage.VehicleDetailsone()
        await addvinpage.PowerSourceHyBrid()
        await addvinpage.Mileage()
        await addvinpage.VehicleDescp()
    })

    test('11. Business: Upload Media', async () => {
        await addmediapage.AdditionalPhotos()
    })

    test('12. Business: Upload Vehicle Title Documents and Business Documents and Creating Business Account in Appilicant page', async () => {
        await businesspage.AlreadyBusinessVehicleDocument()
    })

    test('13. Business: Additional Details In Finish Application and Review', async () => {
        await applicationinfopage.FinishApplication()
        await applicationinfopage.ReviewApp()
    })

    // ----------------------------------------------------------
    // 🌟  DEALER APPLICATION
    // ----------------------------------------------------------

    test('14. Dealer: Start Another Application', async () => {
        await businesspage.StartAnotherApp()
    })

    test('15. Dealer: Enter Vehicle Details (VIN, Power Source, Condition, Description', async () => {
        await addvinpage.VehicleDetailsone()
        await addvinpage.PowerSourceElectric()
        await addvinpage.Mileage()
        await addvinpage.VehicleDescp()
    })

    test('16. Dealer: Upload Media', async () => {
        await addmediapage.AdditionalPhotos()
    })

    test('17. Dealer: Upload Vehicle Title Documents and Dealer Documents and Creating Dealer Account in Appilicant page', async () => {
        await dealerpage.AlreadyDealerVehicleDocument()
    })

    test('18. Dealer: Additional Details In Finish Application and Review', async () => {
        await applicationinfopage.FinishApplication()
        await applicationinfopage.ReviewApp()
    })

    // ----------------------------------------------------------
    // 🌟  TRUST APPLICATION
    // ----------------------------------------------------------

    test('19. Trust: Start Another Application', async () => {
        await businesspage.StartAnotherApp()
    })

    test('20. Trust: Enter Vehicle Details (VIN, Power Source, Condition, Description', async () => {
        await addvinpage.VehicleDetailsone()
        await addvinpage.PowerSourceDiesel()
        await addvinpage.Mileage()
        await addvinpage.VehicleDescp()
    })

    test('21. Trust: Upload Media', async () => {
        await addmediapage.AdditionalPhotos()
    })

    test('22. Trust: Upload Vehicle Title Documents and Title Documents', async () => {
        await trustpage.AlreadyTrustVehicleDocument()
    })

    test('23. Trust: Additional Details In Finish Application and Review', async () => {
        await applicationinfopage.FinishApplication()
        await applicationinfopage.ReviewApp()
    })

    test('24. Trust: View My  Submission & Verify All Tabs in Dashboard', async () => {
        await applicationinfopage.ViewMySubmission()
        await applicationinfopage.ConsignmentDashboardwithDocument()
    })

    test.afterAll(async () => {
        console.log('Consignment Flow for all applicant types completed.')
        await page.close()
        // await browser.close() // uncomment if you want browser to close
    })

})
