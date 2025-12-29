import { expect } from '@playwright/test'
import { AddVIN_WebElements } from '../WebElements/AddVIN_WebElements.js'    
import { TestData } from '../TestData/testdata.js';
import { AddMedia_WebElements } from '../WebElements/AddMedia_WebElements.js'  
import { TitleDocument_WebElements } from '../WebElements/TitleDocument_WebElements.js'  
import { Business_WeElements } from '../WebElements/Business_WeElements.js' 

exports.BusinessPage =
class BusinessPage
{
    constructor(page)
    {
        this.page = page
        this.addVIN_webelements =  new AddVIN_WebElements()
        this.addmedia_webelements =  new AddMedia_WebElements()
        this.titledocument_webelements =  new TitleDocument_WebElements()
        this.business_webelements =  new Business_WeElements()
        this.testdata = new TestData()
    }

    async StartAnotherApp()
    {
        await this.page.screenshot({ path: './ScreenShot/19.1 AfterSubmitPage.png', fullPage: true})
        await this.page.locator(this.business_webelements.StartAnotherApplication).click()
    }
    async BusinessVehicleDocument()
    {
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.business_webelements.VehicleTitle_Field).click()
        await this.page.locator(this.business_webelements.Business_Field).click()
        await this.page.locator(this.business_webelements.VehicleTitleTo_Field).fill(this.testdata.TitleToBusinessName)
         //EIN NUMBER
         function generateRandomString(length) {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            let result = '';
            for (let i = 0; i < length; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return result;
        }
        const EinNumber = generateRandomString(Math.floor(Math.random() * (26-19)) + 5);
        const einnumber = EinNumber;
        await this.page.locator(this.business_webelements.Ein).click()
        await this.page.locator(this.business_webelements.Ein).fill(einnumber)
        //await this.page.locator(this.business_webelements.Ein).fill(this.testdata.EINNumber)
        const fileToUpload1 = 
        {
            "fronttitle" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Front title.jpg",
            "Backtitle":        "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Back Titile.jpg"
        }

        // Upload each photo to its respective field
        await this.page.locator(this.titledocument_webelements.FrontTitle).setInputFiles(fileToUpload1.fronttitle);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.titledocument_webelements.BackTitle).setInputFiles(fileToUpload1.Backtitle);
        await this.page.waitForTimeout(2000);
        await this.page.screenshot({ path: './ScreenShot/VehicleDocumentsWithBusiness.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
        await this.page.locator(this.business_webelements.BusinessNumber).fill(this.testdata.BusinessNum)        
        await this.page.locator(this.titledocument_webelements.AddressSearch).fill(this.testdata.AddressSearch)
        await this.page.locator(this.titledocument_webelements.SelectAddress).click()
        await this.page.screenshot({ path: './ScreenShot/BusinessDetails.png', fullPage: true})
        const fileToUpload2 = 
        {
            "OperatingAggDoc" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\operating agreement.jpg"
        }

        // Upload each photo to its respective field
        await this.page.locator(this.business_webelements.OperatingAggrement).setInputFiles(fileToUpload2.OperatingAggDoc);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.business_webelements.OperatingAggYES).click()
        await this.page.screenshot({ path: './ScreenShot/BusinessDetailswithDocument.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
        await this.page.waitForTimeout(2000)

        try 
        {
            await this.page.locator(this.titledocument_webelements.MiddleName).fill(this.testdata.MiddleName);
            await this.page.locator(this.titledocument_webelements.ContactNumber).fill(this.testdata.ContactNumber);
            await this.page.locator(this.titledocument_webelements.AddressSearch).fill(this.testdata.AddressSearch);
            await this.page.locator(this.titledocument_webelements.SelectAddress).click();
            // await this.page.locator(this.titledocument_webelements.CountydDropdown).click()
            // await this.page.waitForTimeout(500)
            // await this.page.locator(this.titledocument_webelements.CountydDropdown).click()
            // await this.page.waitForTimeout(3000);
            await this.page.screenshot({ path: './ScreenShot/PersonalDetailsWithBusiness.png', fullPage: true})
            await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click();
        } catch (error)
        {
            console.error('An error occurred during the form submission process:', error);
            // Optional: Take a screenshot or log additional details
        }

    }
    async AlreadyBusinessVehicleDocument()
    {
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.business_webelements.VehicleTitle_Field).click()
        await this.page.locator(this.business_webelements.Business_Field).click()
        await this.page.locator(this.business_webelements.VehicleTitleTo_Field).fill(this.testdata.TitleToBusinessName)
         //EIN NUMBER
         function generateRandomString(length) {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            let result = '';
            for (let i = 0; i < length; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return result;
        }
        const EinNumber = generateRandomString(Math.floor(Math.random() * (26-19)) + 5);
        
    
        const einnumber = EinNumber;
        await this.page.locator(this.business_webelements.Ein).click()
        await this.page.locator(this.business_webelements.Ein).fill(einnumber)
        //await this.page.locator(this.business_webelements.Ein).fill(this.testdata.EINNumber)
        const fileToUpload1 = 
        {
            "fronttitle" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Insurance.pdf",
            "Backtitle":        "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\rare.gif"
        }

        // Upload each photo to its respective field
        await this.page.locator(this.titledocument_webelements.FrontTitle).setInputFiles(fileToUpload1.fronttitle);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.titledocument_webelements.BackTitle).setInputFiles(fileToUpload1.Backtitle);
        await this.page.waitForTimeout(2000);
        await this.page.screenshot({ path: './ScreenShot/15 VehicleDocumentWithBusiness.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
        await this.page.locator(this.business_webelements.BusinessNumber).fill(this.testdata.BusinessNum)        
        await this.page.locator(this.titledocument_webelements.AddressSearch).fill(this.testdata.AddressSearch)
        await this.page.locator(this.titledocument_webelements.SelectAddress).click()
        await this.page.locator(this.titledocument_webelements.CountydDropdown).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.titledocument_webelements.CountydDropdown).click()
        await this.page.screenshot({ path: './ScreenShot/15.1 BusinessDetails.png', fullPage: true})
        const fileToUpload2 = 
        {
            "OperatingAggDoc" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\vin.heif"
        }

        // Upload each photo to its respective field
        await this.page.locator(this.business_webelements.OperatingAggrement).setInputFiles(fileToUpload2.OperatingAggDoc);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.business_webelements.OperatingAggYES).click()
        await this.page.screenshot({ path: './ScreenShot/15.2 BusinessDetailsWithDocument.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click({timeout:60000})
        await this.page.waitForTimeout(8000)
        try 
        {
            // Check if the fourth product exists and is visible
            const PersonalNextButton = this.page.locator(this.addVIN_webelements.Nextbtn_Submit);
            const isPersonalNextButton = await PersonalNextButton.isVisible();
            
            if (isPersonalNextButton)
           {
            await this.page.screenshot({ path: './ScreenShot/15.3 PersonalDetailsWithBusiness.png', fullPage: true})
                await PersonalNextButton.click({timeout:60000});
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