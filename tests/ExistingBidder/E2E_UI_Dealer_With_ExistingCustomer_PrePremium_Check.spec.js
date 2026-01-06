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

test.describe('Existing Account for Dealer Pre-Premium Bidder Opportunity Flow', () => {

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch()
        context = await browser.newContext()
        page = await context.newPage()

        // Initialize Page Objects
        addvinpage = new AddVinPage(page)
        bidderinvidualpage = new BidderInvidualPage(page)
        bidderdealerpage = new BidderDealerPage(page)
    })

    test('01. Start Dealer Pre-Premium Opportunity Flow', async () => {
        await bidderdealerpage.BidderOpportunityPre_premium()
    })

    test('02. Sign In with Existing Account', async () => {
        await addvinpage.ExistingAccount()
    })

    test('03. Fill Individual Details', async () => {
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

    test('07. Upload Additional Documents', async () => {
        await bidderinvidualpage.AdditionalDocument()
    })

    test('08. Creating Dealer Account and Upload Dealer Documents', async () => {
        await bidderdealerpage.DealerDocument()
    })

    test('09. Add Products', async () => {
        await bidderinvidualpage.AddProducts()
    })

    test('10. Enter Card Details', async () => {
        await bidderinvidualpage.CardDetails()
    })

    test('11. Complete Personal DocuSign', async () => {
        await bidderinvidualpage.PersonalDocuSign()
    })

    test('12. View Bidder Opportunity', async () => {
        await bidderinvidualpage.ViewBidderOpportunity()
    })

    test.afterAll(async () => {
        console.log('Dealer Pre-Premium Bidder Flow Completed.')
        await page.close()
        // await browser.close() // enable if desired
    })

})
