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

    // test('Confirm Email', async () => {
    //     await addvinpage.ConfirmEmail()
    // })

    // test('Login', async () => {
    //     await addvinpage.LoginIn()
    // })

    test('03. Enter Individual Details', async () => {
        await bidderinvidualpage.IndividualDetails()
    })

    test('04. Complete Individual Registration', async () => {
        await bidderinvidualpage.IndividualRegistration()
    })

    test('05. Enter Regular Bidder Mobilia Address Details', async () => {
        await bidderinvidualpage.RegularBidderMobiliaAddressDetails()
    })

    test('06. Set Desired Bid Limit', async () => {
        await bidderinvidualpage.DesiredBidLimit()
    })

    test('07. Enter Card Details', async () => {
        await bidderinvidualpage.CardDetails()
    })

    test('08. Complete DocuSign', async () => {
        await bidderinvidualpage.PersonalDocuSign()
    })

    test('09. View Created Bidder Opportunity', async () => {
        await bidderinvidualpage.ViewBidderOpportunity()
    })

    test.afterAll(async () => {
        console.log('Individual Regular Bidder Mobilia workflow completed.')
        await page.close()
        // await browser.close()  // Uncomment to close browser automatically
    })

})
