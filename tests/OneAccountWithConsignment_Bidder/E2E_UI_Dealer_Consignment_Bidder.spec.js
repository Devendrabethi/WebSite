import { test } from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage.js'
import { AddMediaPage } from '../../Pages/AddMediaPage.js'
import { ApplicationInfoPage } from '../../Pages/ApplicationInfoPage.js'
import { DealerPage } from '../../Pages/DealerPage.js'
import { BidderDealerPage } from '../../Pages/BidderDealerPage.js'
import { BidderInvidualPage } from '../../Pages/BidderInvidualPage.js'
import { KioskPage } from '../../Pages/KioskPage.js';

let browser
let context
let page
let bidderdealerpage
let addvinpage
let addmediapage
let applicationinfopage
let dealerpage
let bidderinvidualpage
let kioskpage;

test.describe('Creating one account and creating Consignment and Bidder Flow', () => {

    test.beforeAll(async ({ playwright }) => {
        // Launch browser
        browser = await playwright.chromium.launch()
        context = await browser.newContext()
        page = await context.newPage()

        // Initialize Page Objects
        addvinpage = new AddVinPage(page)
        addmediapage = new AddMediaPage(page)
        applicationinfopage = new ApplicationInfoPage(page)
        dealerpage = new DealerPage(page)
        bidderdealerpage = new BidderDealerPage(page)
        bidderinvidualpage = new BidderInvidualPage(page)
        kioskpage = new KioskPage(page);
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

    test('05. Enter Vehicle VIN', async () => {
        await addvinpage.VehicleDetailsone()
    })

    test('06. Select Power Source (Electric) and Vehicle Details', async () => {
        await addvinpage.PowerSourceElectric()
    })

    test('07.  Vehicle Condition', async () => {
        await addvinpage.Mileage()
    })

    test('08. Enter Vehicle Short and Long Description', async () => {
        await addvinpage.VehicleDescp()
    })

    test('09. Uploading Media', async () => {
        // await addmediapage.MainPhotos();
        await addmediapage.AdditionalPhotos()
    })

    test('10. Upload Vehicle Title Documents and Creating Dealer Account in Appilicant page and Creating Personal Account', async () => {
        await dealerpage.DealerVehicleDocument()
    })

    test('11. Additional Details In Finish Application', async () => {
        await applicationinfopage.FinishApplication()
    })

    test('12. Review Application', async () => {
        await applicationinfopage.ReviewApp()
    })

    test('13. View My Submission', async () => {
        await applicationinfopage.ViewMySubmission()
    })

    test('14. Open Consignment Dashboard and Verifying all tab in Dashboard', async () => {
        await applicationinfopage.ConsignmentDashboardwithDocument()
    })

    
    test('15. Start Dealer Pre-Premium Opportunity Flow', async () => {
        await bidderdealerpage.BidderOpportunityPre_premium()
    })

    test('16. Fill Individual Details', async () => {
        await kioskpage.WithExistingDetailPrePopulate()
    })

    test('17. Complete Dealer Registration', async () => {
        await bidderdealerpage.DealerRegistration()
    })

    test('18. Enter Address Details', async () => {
        await bidderinvidualpage.AddressDetails()
    })

    test('19. Set Desired Bid Limit', async () => {
        await bidderdealerpage.DesiredBidLimit()
    })

    test('20. Upload Additional Documents', async () => {
        await bidderinvidualpage.AdditionalDocument()
    })

    test('21. Creating Dealer Account and Upload Dealer Documents', async () => {
        await bidderdealerpage.DealerDocument()
    })

    test('22. Add Products', async () => {
        await bidderinvidualpage.AddProducts()
    })

    test('23. Enter Card Details', async () => {
        await bidderinvidualpage.CardDetails()
    })

    test('24. Complete Personal DocuSign', async () => {
        await bidderinvidualpage.PersonalDocuSign()
    })

    test('25. View Bidder Opportunity', async () => {
        await bidderinvidualpage.ViewBidderOpportunity()
    })


    test.afterAll(async () => {
        console.log('Dealer Consignment Flow Completed.')
        await page.close()
        // await browser.close() // enable if needed
    })

})
