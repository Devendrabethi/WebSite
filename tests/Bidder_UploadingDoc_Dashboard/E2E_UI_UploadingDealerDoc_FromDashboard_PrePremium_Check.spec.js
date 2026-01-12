import { test } from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage.js'
import { BidderInvidualPage } from '../../Pages/BidderInvidualPage.js'
import { BidderDealerPage } from '../../Pages/BidderDealerPage.js'

let browser
let context
let page

let addvinpage
let bidderinvidualpage
let bidderdealerpage

test.describe('Bidder Opportunity - Dealer Pre-Premium (Upload Documents in Dashboard)', () => {

    test.beforeAll(async ({ playwright }) => {
        // Launch browser
        browser = await playwright.chromium.launch()
        context = await browser.newContext()
        page = await context.newPage()

        // Initialize Page Objects
        addvinpage = new AddVinPage(page)
        bidderinvidualpage = new BidderInvidualPage(page)
        bidderdealerpage = new BidderDealerPage(page)
    })

    test('01. Start Dealer Pre-Premium Opportunity', async () => {
        await bidderdealerpage.BidderOpportunityPre_premium()
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

    test('05. Enter Individual Details Register', async () => {
        await bidderinvidualpage.IndividualDetails()
    })

    test('06. Complete Dealer Registration Method', async () => {
        await bidderdealerpage.DealerRegistration()
    })

    test('07. Enter Addresses Details', async () => {
        await bidderinvidualpage.AddressDetails()
    })

    test('08. Bid Method', async () => {
        await bidderdealerpage.DesiredBidLimit()
    })

    test('09. Continue Without Uploading Method Individual Documents', async () => {
        await bidderinvidualpage.AdditionalWithoutDocumentUploadingfromDashboard()
    })

    test('10. Continue Without Uploading Method Dealer Documents', async () => {
        await bidderdealerpage.DealerWithoutDocUploadingfromDashboard()
    })

    test('11. Add Products Packages', async () => {
        await bidderinvidualpage.AddProducts()
    })

    test('12. Enter Card Details in Payment Page', async () => {
        await bidderinvidualpage.CardDetails()
    })

    test('13. Complete DocuSign Agreement', async () => {
        await bidderinvidualpage.PersonalDocuSign()
    })

    test('14. View Aggreement Created Bidder Opportunity and Upload Documents from Dashboard', async () => {
        await bidderinvidualpage.BidderDashboardWithoutDocument()
    })

    test.afterAll(async () => {
        console.log('Dealer Pre-Premium (Dashboard Upload) workflow completed.')
        await page.close()
        // await browser.close() // Uncomment to close browser
    })

})
