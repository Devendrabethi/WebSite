import { expect } from '@playwright/test'
import { AddVIN_WebElements } from '../WebElements/AddVIN_WebElements.js'    
import { TestData } from '../TestData/testdata.js';
import { AddMedia_WebElements } from '../WebElements/AddMedia_WebElements.js'  
import { TitleDocument_WebElements } from '../WebElements/TitleDocument_WebElements.js'  
import { Business_WeElements } from '../WebElements/Business_WeElements.js' 
import { Dealer_WebElements } from '../WebElements/Dealer_WebElements.js' 

exports.DealerPage =
class DealerPage
{
    constructor(page)
    {
        this.page = page
        this.addVIN_webelements =  new AddVIN_WebElements()
        this.addmedia_webelements =  new AddMedia_WebElements()
        this.titledocument_webelements =  new TitleDocument_WebElements()
        this.business_webelements =  new Business_WeElements()
        this.dealer_webelements =  new Dealer_WebElements()
        this.testdata = new TestData()
    }

    async StartAnotherApp()
    {
        await this.page.locator(this.business_webelements.StartAnotherApplication).click()
    }
    async DealerVehicleDocument()
    {
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.dealer_webelements.VehicleTitle_Field).click()
        await this.page.locator(this.dealer_webelements.Dealer_Field).click()
        await this.page.locator(this.dealer_webelements.VehicleTitleTo_Field).fill(this.testdata.TitleToDealerName)
        await this.page.locator(this.dealer_webelements.DealerNumber_Field).fill(this.testdata.DealerNumber_Value)
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
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()

        await this.page.locator(this.dealer_webelements.DealerNumber).fill(this.testdata.DealerNum)        
        // await this.page.locator(this.titledocument_webelements.AddressSearch).fill(this.testdata.AddressSearch)
        // await this.page.locator(this.titledocument_webelements.SelectAddress).click()

        const fileToUpload2 = 
        {

            "DealerLicense" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Dealer License.jpg",
            "ResaleLicense" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Resale License.jpg",
            "OperatingAggDoc" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\operating agreement.jpg"
        }

        // Upload each photo to its respective field
        await this.page.locator(this.dealer_webelements.DealerDoc).setInputFiles(fileToUpload2.DealerLicense);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.dealer_webelements.ResaleDoc).setInputFiles(fileToUpload2.ResaleLicense);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.dealer_webelements.OperatingAggrement).setInputFiles(fileToUpload2.OperatingAggDoc);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.dealer_webelements.OperatingAggYES).click()
        await this.page.locator(this.dealer_webelements.DealerExpDateCalendar).click()
        await this.page.locator(this.dealer_webelements.CurrentDate).click()
        await this.page.locator(this.dealer_webelements.DealerLicenseState).fill(this.testdata.LicState)
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.dealer_webelements.SelectState).click()
        await this.page.locator(this.dealer_webelements.TaxId).fill(this.testdata.TaxId_Value)
        await this.page.locator(this.dealer_webelements.ResaleExpDateCalandar).click()
        await this.page.locator(this.dealer_webelements.CurrentDate).click()
        await this.page.locator(this.dealer_webelements.ResaleLicenseState).fill(this.testdata.LicState)
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.dealer_webelements.SelectState).click()

        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
        await this.page.waitForTimeout(1000)

    }
}