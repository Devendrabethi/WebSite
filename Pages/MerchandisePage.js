import { expect } from '@playwright/test'
import { AddVIN_WebElements } from '../WebElements/AddVIN_WebElements'    
import { TestData } from '../TestData/testdata.js';
import { Merchandise_WebElements } from '../WebElements/Merchandise_WebElements'  
import { TitleDocument_WebElements } from '../WebElements/TitleDocument_WebElements.js'  
import { AddMedia_WebElements } from '../WebElements/AddMedia_WebElements'  

exports.MerchandisePage =
class MerchandisePage
{
    constructor(page)
    {
        this.page = page
        this.addVIN_webelements =  new AddVIN_WebElements()
        this.merchandise_webelements =  new Merchandise_WebElements()
        this.titledocument_webelements =  new TitleDocument_WebElements()
        this.addmedia_webelements =  new AddMedia_WebElements()
        this.testdata = new TestData()
        this.emailid = "";
    }

    async MerchandiseURL()
    {
        //await this.page.setViewportSize({ width: 1920, height: 950 })
        await this.page.goto(process.env.MerchandiseURL)
        await this.page.locator(this.addVIN_webelements.Acceptpopup).click({timeout:60000})
    }
    async Item_Details1()
    {
        await this.page.locator(this.merchandise_webelements.Add_new_merchandise).click()
        await this.page.waitForTimeout(2000)
        const randomVehicle = this.testdata.vehicleMakes[ Math.floor(Math.random() * this.testdata.vehicleMakes.length)]
        await this.page.fill(this.merchandise_webelements.Describe_Item1, randomVehicle,{ state: 'visible' });
        //await this.page.locator(this.merchandise_webelements.Describe_Item1).fill(this.testdata.Audi)
        await this.page.locator(this.merchandise_webelements.Estimate_Value1).fill(this.testdata.VechileWorth)
        await this.page.locator(this.merchandise_webelements.Addtional_Details1).fill(this.testdata.Signature)
        await this.page.waitForTimeout(2000)
    }
    async AdditionalPhotos1()
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
        //await this.page.waitForTimeout(4000);
        await this.page.locator(this.addmedia_webelements.UploadAllButton).click()
        await this.page.waitForTimeout(20000);
        await this.page.screenshot({ path: './ScreenShot/11 VehiclePhotosWithValidFormate.png', fullPage: true})
    }
    async Add_Another_Item()
    {
        await this.page.locator(this.merchandise_webelements.Add_Another_Item).click()
        await this.page.waitForTimeout(3000)
    }
    async Item_Details2()
    {
        const randomVehicle = this.testdata.vehicleMakes[ Math.floor(Math.random() * this.testdata.vehicleMakes.length)]
        await this.page.fill(this.merchandise_webelements.Describe_Item2, randomVehicle,{ state: 'visible' });
        //await this.page.locator(this.merchandise_webelements.Describe_Item1).fill(this.testdata.Audi)
        await this.page.locator(this.merchandise_webelements.Estimate_Value2).fill(this.testdata.VechileWorth)
        await this.page.locator(this.merchandise_webelements.Addtional_Details2).fill(this.testdata.Signature)
        await this.page.waitForTimeout(3000)
    }
    async AdditionalPhotos2()
    {
        const fileToUpload = 
        [
            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\front.jpg",
            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\rare.gif",
        ]
        // // Upload each photo to its respective field
        await this.page.locator(this.addmedia_webelements.AdditionalPhotos2).setInputFiles(fileToUpload, { timeout: 90000 })
        //await this.page.waitForTimeout(4000);
        await this.page.locator(this.addmedia_webelements.UploadAllButton).click()
        await this.page.waitForTimeout(10000);
        await this.page.screenshot({ path: './ScreenShot/11.1 VehiclePhotosWithValidFormate.png', fullPage: true})
    }
    async Item_Details3()
    {
        const randomVehicle = this.testdata.vehicleMakes[ Math.floor(Math.random() * this.testdata.vehicleMakes.length)]
        await this.page.fill(this.merchandise_webelements.Describe_Item3, randomVehicle,{ state: 'visible' });
        //await this.page.locator(this.merchandise_webelements.Describe_Item1).fill(this.testdata.Audi)
        await this.page.locator(this.merchandise_webelements.Estimate_Value3).fill(this.testdata.VechileWorth)
        await this.page.locator(this.merchandise_webelements.Addtional_Details3).fill(this.testdata.Signature)
        await this.page.waitForTimeout(3000)
    }
    async AdditionalPhotos3()
    {
        const fileToUpload = 
        [
            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\front.jpg",
            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\rare.gif",
        ]
        // // Upload each photo to its respective field
        await this.page.locator(this.addmedia_webelements.AdditionalPhotos3).setInputFiles(fileToUpload, { timeout: 90000 })
        //await this.page.waitForTimeout(4000);
        await this.page.locator(this.addmedia_webelements.UploadAllButton).click()
        await this.page.waitForTimeout(10000);
        await this.page.screenshot({ path: './ScreenShot/11.2 VehiclePhotosWithValidFormate.png', fullPage: true})
    }
    async NextToPersonalAccount()
    {
        await this.page.locator(this.merchandise_webelements.Next_Button).click()
        await this.page.waitForTimeout(3000)
    }
    async Create_PersonalAccount()
    {
        await this.page.locator(this.titledocument_webelements.MiddleName_Merchandise).fill(this.testdata.MiddleName)
        await this.page.locator(this.titledocument_webelements.PhoneNumber_Merchandise).fill(this.testdata.ContactNumber)
        await this.page.locator(this.titledocument_webelements.AddressSearch_Related).click()
        await this.page.locator(this.titledocument_webelements.AddressSearch_Related).fill(this.testdata.AddressSearch)
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.titledocument_webelements.SelectAddress).click()
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/13 PersonalAddress.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click({timeout:60000})
        await this.page.waitForTimeout(3000)
    }
    async ReviewApp()
    {
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.merchandise_webelements.SignatureName_Merchandise).fill(this.testdata.Signature)
        await this.page.locator(this.merchandise_webelements.Calendar).click()
        await this.page.locator(this.merchandise_webelements.CurrentDate).click()
        await this.page.screenshot({ path: './ScreenShot/18 ConsignmentReview.png', fullPage: true})
        await this.page.locator(this.merchandise_webelements.SubmitApplicaion).click()
        await this.page.waitForTimeout(5000)
    }
    async Start_Another_Application()
    {
        await this.page.locator(this.merchandise_webelements.Start_Another_Application).click()
    }

}    