import { test } from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage.js'
import { AddMediaPage } from '../../Pages/AddMediaPage.js'
import { MerchandisePage } from '../../Pages/MerchandisePage.js'
import { ApplicationInfoPage } from '../../Pages/ApplicationInfoPage.js'

let browser
let context
let page

let addvinpage
let addmediapage
let merchandisepage
let applicationinfopage

test.describe('Merchandise Personal Flow', () => {

    test.beforeAll(async ({ playwright }) => {
        // Launch browser
        browser = await playwright.chromium.launch()
        context = await browser.newContext()
        page = await context.newPage()

        // Initialize Page Objects
        addvinpage = new AddVinPage(page)
        addmediapage = new AddMediaPage(page)
        merchandisepage = new MerchandisePage(page)
        applicationinfopage = new ApplicationInfoPage(page)
    })

    test('01. Open Merchandise URL', async () => {
        await merchandisepage.MerchandiseURL()
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

    test('05. Creating Item1', async () => {
        await merchandisepage.Item_Details1()
    })
    test('6. Uploading Media', async () => {
        await merchandisepage.AdditionalPhotos1()
    })

    test('07. Add Another Item2 ', async () => {
        await merchandisepage.Add_Another_Item()
    })

    test('08. Creating Item2', async () => {
        await merchandisepage.Item_Details2()
    })
    test('9. Uploading Media', async () => {
        await merchandisepage.AdditionalPhotos2()
    })

    test('10. Add Another Item3', async () => {
        await merchandisepage.Add_Another_Item()
    })

    test('11. Creating Item3', async () => {
        await merchandisepage.Item_Details3()
    })
    test('12. Uploading Media', async () => {
        await merchandisepage.AdditionalPhotos3()
    })

    test('13. Moving to Personal Account Page', async () => {
        await merchandisepage.NextToPersonalAccount()
    })

    test('14. Creating Personal Account', async () => {
        await merchandisepage.Create_PersonalAccount()
    })

    test('15. Review Application', async () => {
        await merchandisepage.ReviewApp()
    })

    test('16. Start Another Merchandise', async () => {
        await merchandisepage.Start_Another_Application()
    })

    test.afterAll(async () => {
        console.log('Individual Consignment Application Flow Completed.')
        await page.close()
        // await browser.close()   // enable if needed
    })

})
