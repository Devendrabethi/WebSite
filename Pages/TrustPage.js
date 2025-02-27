import { expect } from '@playwright/test'
import { AddVIN_WebElements } from '../WebElements/AddVIN_WebElements.js'    
import { TestData } from '../TestData/testdata.js';
import { AddMedia_WebElements } from '../WebElements/AddMedia_WebElements.js'  
import { TitleDocument_WebElements } from '../WebElements/TitleDocument_WebElements.js'  
import { Business_WeElements } from '../WebElements/Business_WeElements.js' 
import { Dealer_WebElements } from '../WebElements/Dealer_WebElements.js' 
import { Trust_WebElements } from '../WebElements/Trust_WebElements.js' 

exports.TrustPage =
class TrustPage
{
    constructor(page)
    {
        this.page = page
        this.addVIN_webelements =  new AddVIN_WebElements()
        this.addmedia_webelements =  new AddMedia_WebElements()
        this.titledocument_webelements =  new TitleDocument_WebElements()
        this.business_webelements =  new Business_WeElements()
        this.dealer_webelements =  new Dealer_WebElements()
        this.trust_webelements =  new Trust_WebElements()
        this.testdata = new TestData()
    }
    async TrustVehicleDocument()
    {
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.trust_webelements.VehicleTitle_Field).click()
        await this.page.locator(this.trust_webelements.Trust_Field).click()
        await this.page.locator(this.trust_webelements.VehicleTitleTo_Field).click()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.trust_webelements.VehicleTitleTo_Field).fill(this.testdata.TitleTrustName)
        const fileToUpload1 = 
        {
            "trustDoc" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\trust Doc.jpg",   
            "fronttitle" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Front title.jpg",
            "Backtitle":        "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Back Titile.jpg"
        }

        // Upload each photo to its respective field
        await this.page.locator(this.trust_webelements.TrustDoc).setInputFiles(fileToUpload1.trustDoc);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.titledocument_webelements.FrontTitle).setInputFiles(fileToUpload1.fronttitle);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.titledocument_webelements.BackTitle).setInputFiles(fileToUpload1.Backtitle);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
       await this.page.waitForTimeout(2000)

    try 
    {
        await this.page.locator(this.titledocument_webelements.MiddleName).fill(this.testdata.MiddleName);
        await this.page.locator(this.titledocument_webelements.ContactNumber).fill(this.testdata.ContactNumber);
        await this.page.locator(this.titledocument_webelements.AddressSearch).fill(this.testdata.AddressSearch);
        await this.page.locator(this.titledocument_webelements.SelectAddress).click();
        await this.page.locator(this.titledocument_webelements.CountydDropdown).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.titledocument_webelements.CountydDropdown).click()
    
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click();
    } catch (error)
    {
        console.error('An error occurred during the form submission process:', error);
        // Optional: Take a screenshot or log additional details
    } 
    }
    async AlreadyTrustVehicleDocument()
    {
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.trust_webelements.VehicleTitle_Field).click()
        await this.page.locator(this.trust_webelements.Trust_Field).click()
        await this.page.locator(this.trust_webelements.VehicleTitleTo_Field).click()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.trust_webelements.VehicleTitleTo_Field).fill(this.testdata.TitleTrustName)
        const fileToUpload1 = 
        {
            "trustDoc" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\trust Doc.jpg",   
            "fronttitle" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Front title.jpg",
            "Backtitle":        "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Back Titile.jpg"
        }

        // Upload each photo to its respective field
        await this.page.locator(this.trust_webelements.TrustDoc).setInputFiles(fileToUpload1.trustDoc);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.titledocument_webelements.FrontTitle).setInputFiles(fileToUpload1.fronttitle);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.titledocument_webelements.BackTitle).setInputFiles(fileToUpload1.Backtitle);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
       await this.page.waitForTimeout(2000)

       try 
       {
            await this.page.locator(this.titledocument_webelements.CountydDropdown).click()
            await this.page.waitForTimeout(500)
            await this.page.locator(this.titledocument_webelements.CountydDropdown).click()
           await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click();
       } 
       catch (error) 
       {
           console.error('Error occurred while clicking the Next button:', error);
           // Optional: Add additional actions (e.g., screenshot, retry logic) here
       }
    }
    async ViewMySubmission()
    {
        await this.page.locator(this.trust_webelements.ViewSubmission).click()
        await this.page.locator(this.trust_webelements.Consignmentbutton).click()
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.trust_webelements.RemovePastEvent).click()
        
    }
}