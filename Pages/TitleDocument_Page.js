import { expect } from '@playwright/test'
import { AddVIN_WebElements } from '../WebElements/AddVIN_WebElements.js'    
import { TestData } from '../TestData/testdata.js';
import { AddMedia_WebElements } from '../WebElements/AddMedia_WebElements.js'  
import { TitleDocument_WebElements } from '../WebElements/TitleDocument_WebElements.js'  

exports.TitleDocument_Page =
class TitleDocument_Page
{
    constructor(page)
    {
        this.page = page
        this.addVIN_webelements =  new AddVIN_WebElements()
        this.addmedia_webelements =  new AddMedia_WebElements()
        this.titledocument_webelements =  new TitleDocument_WebElements()
        this.testdata = new TestData()
    }

    async VehicleDocument()
    {
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.titledocument_webelements.VehicleTitle_Field).click()
        await this.page.locator(this.titledocument_webelements.Individual_Field).click()
        //await this.page.locator(this.titledocument_webelements.VehicleTitleTo_Field).fill(this.testdata.IndividualName)

        const fileToUpload = 
        {
            "fronttitle" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Insurance.pdf",
            "Backtitle":        "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\engine.heic"
        }

        // Upload each photo to its respective field
        await this.page.locator(this.titledocument_webelements.FrontTitle).setInputFiles(fileToUpload.fronttitle);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.titledocument_webelements.BackTitle).setInputFiles(fileToUpload.Backtitle);
        await this.page.waitForTimeout(5000);
        await this.page.screenshot({ path: './ScreenShot/12 VehicleDocuments.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.titledocument_webelements.MiddleName).fill(this.testdata.MiddleName)
        await this.page.locator(this.titledocument_webelements.ContactNumber).fill(this.testdata.ContactNumber)
        await this.page.locator(this.titledocument_webelements.AddressSearch).click()
        await this.page.locator(this.titledocument_webelements.AddressSearch).fill(this.testdata.AddressSearch)
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.titledocument_webelements.SelectAddress).click()
        await this.page.waitForTimeout(1000)
        // await this.page.locator(this.titledocument_webelements.CountydDropdown).click()
        // await this.page.waitForTimeout(500)
        // await this.page.locator(this.titledocument_webelements.CountydDropdown).click()
        // await this.page.waitForTimeout(3000)
        await this.page.screenshot({ path: './ScreenShot/13 PersonalAddress.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click({timeout:60000})
    }
     async ExistingVehicleDocument()
    {
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.titledocument_webelements.VehicleTitle_Field).click()
        await this.page.locator(this.titledocument_webelements.Individual_Field).click()
        //await this.page.locator(this.titledocument_webelements.VehicleTitleTo_Field).fill(this.testdata.IndividualName)

        const fileToUpload = 
        {
            "fronttitle" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Insurance.pdf",
            "Backtitle":        "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\engine.heic"
        }

        // Upload each photo to its respective field
        await this.page.locator(this.titledocument_webelements.FrontTitle).setInputFiles(fileToUpload.fronttitle);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.titledocument_webelements.BackTitle).setInputFiles(fileToUpload.Backtitle);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
        await this.page.screenshot({ path: './ScreenShot/12.1 VehicleDocuments.png', fullPage: true})
        await this.page.waitForTimeout(6000)

        try 
        {
            // Check if the fourth product exists and is visible
            const PersonalNextButton = this.page.locator(this.addVIN_webelements.Nextbtn_Submit);
            const isPersonalNextButton = await PersonalNextButton.isVisible();
            
            if (isPersonalNextButton)
           {
                await PersonalNextButton.click({timeout:60000});
                await this.page.screenshot({ path: './ScreenShot/12.3 PersonalDetailswithAddress.png', fullPage: true})
            } 
            else
            {
                console.log("The fourth product is not visible, skipping click.");
            }
        } 
        catch (error) 
        {
            console.error("An error occurred during the clicking process:", error);
            // You can add more error handling code here (e.g., take a screenshot, log to a file, etc.)
        }
    }
}