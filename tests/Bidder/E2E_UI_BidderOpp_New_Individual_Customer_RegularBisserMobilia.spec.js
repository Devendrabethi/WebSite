import { test } from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage.js'
import { BidderInvidualPage } from '../../Pages/BidderInvidualPage.js'

let browser
let context
let page

let addvinpage
let bidderinvidualpage

test.describe('Bidder Opportunity - Individual Regular Bidder Mobilia Package', () => {

    test.beforeAll(async ({ playwright }) => {
        // Launch browser
        browser = await playwright.chromium.launch()
        context = await browser.newContext()
        page = await context.newPage()

        // Initialize Page Objects
        addvinpage = new AddVinPage(page)
        bidderinvidualpage = new BidderInvidualPage(page)
    })

    test('01. Start Regular Bidder Mobilia Opportunity', async () => {
        await bidderinvidualpage.BidderOpportunityRegularBidderMobilia()
    })

    test('02. Create New Account', async () => {
        await addvinpage.SignIn()
    })

    test('03. Confirm Email', async () => {
        await addvinpage.ConfirmEmail()
    })

    test('04. Login', async () => {
        await addvinpage.LoginIn()
    })

    test('05. Enter Individual Details Register', async () => {
        await bidderinvidualpage.IndividualDetails()
    })

    test('06. Complete Individual Registration Method', async () => {
        await bidderinvidualpage.IndividualRegistration()
    })

    test('07. Enter Regular Bidder Mobilia Address Details', async () => {
        await bidderinvidualpage.RegularBidderMobiliaAddressDetails()
    })

    test('08. Bid Method', async () => {
        await bidderinvidualpage.DesiredBidLimit()
    })

    test('09. Enter Card Details in Payment Page', async () => {
        await bidderinvidualpage.CardDetails()
    })

    test('10. Complete DocuSign Agreement', async () => {
        await bidderinvidualpage.PersonalDocuSign()
    })

    test('11. View Aggreement Created Bidder Opportunity', async () => {
        await bidderinvidualpage.ViewBidderOpportunity()
    })

    test.afterAll(async () => {
        console.log('Individual Regular Bidder Mobilia workflow completed.')
        await page.close()
        // await browser.close()  // Uncomment to close browser automatically
    })

})
