import { test } from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage.js'
import { BidderInvidualPage } from '../../Pages/BidderInvidualPage.js'
import { BidderBusinessPage } from '../../Pages/BidderBusinessPage.js'

let browser
let context
let page

let addvinpage
let bidderinvidualpage
let bidderbusinesspage

test.describe('Existing Account for Business Bidder Opportunity Flow', () => {

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch()
        context = await browser.newContext()
        page = await context.newPage()

        // Initialize Page Objects
        addvinpage = new AddVinPage(page)
        bidderinvidualpage = new BidderInvidualPage(page)
        bidderbusinesspage = new BidderBusinessPage(page)
    })

    test('01. Start Business Select Opportunity Flow', async () => {
        await bidderbusinesspage.BidderOpportunitySelect()
    })

    test('02. Sign In with Existing Account', async () => {
        await addvinpage.ExistingAccount()
    })

    test('03. Fill Individual Details', async () => {
        await bidderinvidualpage.IndividualDetails()
    })

    test('04. Complete Business Registration', async () => {
        await bidderbusinesspage.BusinessRegistration()
    })

    test('05. Enter Address Details', async () => {
        await bidderinvidualpage.AddressDetails()
    })

    test('06. Set Desired Bid Limit', async () => {
        await bidderbusinesspage.DesiredBidLimit()
    })

    test('07. Upload Additional Documents', async () => {
        await bidderinvidualpage.AdditionalDocument()
    })

    test('08. Creating Business Account and Upload Business Documents', async () => {
        await bidderbusinesspage.BusinessDocument()
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
        console.log('Existing Account Business Bidder Flow Completed.')
        await page.close()
        // await browser.close() // enable if desired
    })

})
