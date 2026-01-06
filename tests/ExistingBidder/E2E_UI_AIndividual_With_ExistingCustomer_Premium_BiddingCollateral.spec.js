import { test } from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage.js'
import { BidderInvidualPage } from '../../Pages/BidderInvidualPage.js'

let browser
let context
let page

let addvinpage
let bidderinvidualpage

test.describe('Existing Account for Premium Bidder Opportunity Flow', () => {

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch()
        context = await browser.newContext()
        page = await context.newPage()

        // Initialize Page Objects
        addvinpage = new AddVinPage(page)
        bidderinvidualpage = new BidderInvidualPage(page)
    })

    test('01. Start Premium Opportunity Flow', async () => {
        await bidderinvidualpage.BidderOpportunityPremium()
    })

    test('02. Sign In with Existing Account', async () => {
        await addvinpage.ExistingAccount()
    })

    test('03. Fill Individual Details', async () => {
        await bidderinvidualpage.IndividualDetails()
    })

    test('04. Complete Individual Registration', async () => {
        await bidderinvidualpage.IndividualRegistration()
    })

    test('05. Enter Address Details', async () => {
        await bidderinvidualpage.AddressDetails()
    })

    test('06. Set Desired Bid Limit', async () => {
        await bidderinvidualpage.DesiredBidLimit()
    })

    test('07. Upload Additional Documents', async () => {
        await bidderinvidualpage.AdditionalDocument()
    })

    test('08. Add Products', async () => {
        await bidderinvidualpage.AddProducts()
    })

    test('09. Enter Card Details', async () => {
        await bidderinvidualpage.CardDetails()
    })

    test('10. Complete Personal DocuSign', async () => {
        await bidderinvidualpage.PersonalDocuSign()
    })

    test('11. View Bidder Opportunity', async () => {
        await bidderinvidualpage.ViewBidderOpportunity()
    })

    test.afterAll(async () => {
        console.log('Existing Account Premium Bidder Flow Completed.')
        await page.close()
        // await browser.close() // enable if desired
    })

})
