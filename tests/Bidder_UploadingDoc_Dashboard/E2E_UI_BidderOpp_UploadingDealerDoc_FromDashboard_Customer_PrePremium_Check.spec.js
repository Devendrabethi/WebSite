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

    // test('Confirm Email', async () => {
    //     await addvinpage.ConfirmEmail()
    // })

    // test('Login', async () => {
    //     await addvinpage.LoginIn()
    // })

    test('03. Enter Individual Details', async () => {
        await bidderinvidualpage.IndividualDetails()
    })

    test('04. Complete Dealer Registration', async () => {
        await bidderdealerpage.DealerRegistration()
    })

    test('05. Enter Address Details', async () => {
        await bidderinvidualpage.AddressDetails()
    })

    test('06. Set Desired Bid Limit', async () => {
        await bidderdealerpage.DesiredBidLimit()
    })

    test('07. Continue Without Uploading Individual Documents', async () => {
        await bidderinvidualpage.AdditionalWithoutDocumentUploadingfromDashboard()
    })

    test('08. Continue Without Uploading Dealer Documents', async () => {
        await bidderdealerpage.DealerWithoutDocUploadingfromDashboard()
    })

    test('09. Add Products', async () => {
        await bidderinvidualpage.AddProducts()
    })

    test('10. Enter Card Details', async () => {
        await bidderinvidualpage.CardDetails()
    })

    test('11. Complete DocuSign', async () => {
        await bidderinvidualpage.PersonalDocuSign()
    })

    test('12. Upload Documents Later from Dashboard', async () => {
        await bidderinvidualpage.BidderDashboardWithoutDocument()
    })

    test.afterAll(async () => {
        console.log('Dealer Pre-Premium (Dashboard Upload) workflow completed.')
        await page.close()
        // await browser.close() // Uncomment to close browser
    })

})
