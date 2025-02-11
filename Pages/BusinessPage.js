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
        await this.page.locator(this.business_webelements.StartAnotherApplication).click()
    }
    async BusinessVehicleDocument()
    {
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.business_webelements.VehicleTitle_Field).click()
        await this.page.locator(this.business_webelements.Business_Field).click()
        await this.page.locator(this.business_webelements.VehicleTitleTo_Field).fill(this.testdata.TitleToBusinessName)
        await this.page.locator(this.business_webelements.Ein).fill(this.testdata.EINNumber)
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

        await this.page.locator(this.business_webelements.BusinessNumber).fill(this.testdata.BusinessNum)        
        // await this.page.locator(this.titledocument_webelements.AddressSearch).fill(this.testdata.AddressSearch)
        // await this.page.locator(this.titledocument_webelements.SelectAddress).click()

        const fileToUpload2 = 
        {
            "OperatingAggDoc" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\operating agreement.jpg"
        }

        // Upload each photo to its respective field
        await this.page.locator(this.business_webelements.OperatingAggrement).setInputFiles(fileToUpload2.OperatingAggDoc);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.business_webelements.OperatingAggYES).click()
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
        await this.page.waitForTimeout(1000)

    }
}