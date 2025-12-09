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

test.describe('Bidder Opportunity - Dealer with Pre-Premium Package', () => {

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

    test('07. Upload Individual Documents', async () => {
        await bidderinvidualpage.AdditionalDocument()
    })

    test('08. Upload Dealer Documents', async () => {
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

    test('12. View Created Bidder Opportunity', async () => {
        await bidderinvidualpage.ViewBidderOpportunity()
    })

    test.afterAll(async () => {
        console.log('Dealer Pre-Premium workflow completed.')
        await page.close()
        // await browser.close()  // uncomment if you want browser to close
    })

})
