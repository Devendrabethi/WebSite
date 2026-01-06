import { expect } from '@playwright/test'
import { AddVIN_WebElements } from '../WebElements/AddVIN_WebElements'    
import { TestData } from '../TestData/testdata.js';
import { AddMedia_WebElements } from '../WebElements/AddMedia_WebElements'  

exports.AddMediaPage =
class AddMediaPage
{
    constructor(page)
    {
        this.page = page
        this.addVIN_webelements =  new AddVIN_WebElements()
        this.addmedia_webelements =  new AddMedia_WebElements()
        this.testdata = new TestData()
    }

    async MainPhotos()
    {
        const fileToUpload = 
        {
            "front" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\front.jpg",
            "Rare":        "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\rare.gif",
            "Side":        "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\side.png",
            "Interior" :   "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\interior.jpeg",
            "Engine":      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\engine.heic",
            "Vin":         "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\vin.heif"
        }

//         // Upload each photo to its respective field
        await this.page.locator(this.addmedia_webelements.FrontPhoto).setInputFiles(fileToUpload.front);
        //await this.page.locator(this.addmedia_webelements.ContinueButton).click()
//        await this.page.waitForTimeout(2000);
        await this.page.locator(this.addmedia_webelements.RarePhoto).setInputFiles(fileToUpload.Rare);
        //await this.page.locator(this.addmedia_webelements.ContinueButton).click()
//        await this.page.waitForTimeout(2000);
        await this.page.locator(this.addmedia_webelements.SidePhoto).setInputFiles(fileToUpload.Side);
        //await this.page.locator(this.addmedia_webelements.ContinueButton).click()
//        await this.page.waitForTimeout(2000);
        await this.page.locator(this.addmedia_webelements.InteriorPhoto).setInputFiles(fileToUpload.Interior);
        //await this.page.locator(this.addmedia_webelements.ContinueButton).click()
//        await this.page.waitForTimeout(2000);
        await this.page.locator(this.addmedia_webelements.EnginePhoto).setInputFiles(fileToUpload.Engine);
        //await this.page.locator(this.addmedia_webelements.ContinueButton).click()
//        await this.page.waitForTimeout(2000);
        await this.page.locator(this.addmedia_webelements.VinPhoto).setInputFiles(fileToUpload.Vin);
        //await this.page.locator(this.addmedia_webelements.ContinueButton).click()
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click({timeout:60000})
        await this.page.waitForTimeout(2000);
    }
    async AdditionalPhotos()
    {
        const fileToUpload = 
        [
             "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\front.jpg",
             "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\rare.gif",
             "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\side.png",
            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\interior.jpeg",
            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\engine.heic",
            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\vin.heif",
            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\2023_mclaren_artura_coupe_base_fq_oem_15_500.jpg.webp"
        ]
        // // Upload each photo to its respective field
        await this.page.locator(this.addmedia_webelements.AdditionalPhotos).setInputFiles(fileToUpload, { timeout: 90000 })
        await this.page.waitForTimeout(4000);
        await this.page.locator(this.addmedia_webelements.UploadAllButton).click()
        await this.page.waitForTimeout(20000);
       // await expect(this.page.locator(this.addVIN_webelements.Nextbtn_Submit)).toBeVisible({timeout:60000})
        await this.page.locator(this.addVIN_webelements.NextButton_AdditionalPhoto).click({timeout:60000})
        await this.page.screenshot({ path: './ScreenShot/11 VehiclePhotosWithValidFormate.png', fullPage: true})
    }
}