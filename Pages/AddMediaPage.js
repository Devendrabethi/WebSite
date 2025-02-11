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
            "Rare":        "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\rare.jpg",
            "Side":        "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\side.jpg",
            "Interior" :   "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\interior.jpg",
            "Engine":      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\engine.jpg",
            "Vin":         "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\vin.jpeg"
        }

        // Upload each photo to its respective field
        await this.page.locator(this.addmedia_webelements.FrontPhoto).setInputFiles(fileToUpload.front);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.addmedia_webelements.RarePhoto).setInputFiles(fileToUpload.Rare);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.addmedia_webelements.SidePhoto).setInputFiles(fileToUpload.Side);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.addmedia_webelements.InteriorPhoto).setInputFiles(fileToUpload.Interior);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.addmedia_webelements.EnginePhoto).setInputFiles(fileToUpload.Engine);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.addmedia_webelements.VinPhoto).setInputFiles(fileToUpload.Vin);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
    }
    async AdditionalPhotos()
    {
        const fileToUpload = 
        [
             "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\front.jpg",
             "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\rare.jpg",
             "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\side.jpg",
            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\interior.jpg",
            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\engine.jpg",
            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\vin.jpeg"
        ]
        // Upload each photo to its respective field
        await this.page.locator(this.addmedia_webelements.AdditionalPhotos).setInputFiles(fileToUpload)
        await this.page.waitForTimeout(2000);

         await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
    }
}