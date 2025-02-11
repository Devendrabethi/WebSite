import { expect } from '@playwright/test'
import { AddVIN_WebElements } from '../WebElements/AddVIN_WebElements.js'    
import { TestData } from '../TestData/testdata.js';
import { ApplicationInfo_WebElements } from '../WebElements/ApplicationInfo_WebElements.js'  

exports.ApplicationInfoPage =
class ApplicationInfoPage
{
    constructor(page)
    {
        this.page = page
        this.addVIN_webelements =  new AddVIN_WebElements()
        this.applicationinfo_webelements =  new ApplicationInfo_WebElements()
        this.testdata = new TestData()
    }

    async FinishApplication()
    {
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.applicationinfo_webelements.VehicleWorth_Field).fill(this.testdata.VechileWorth)
        await this.page.locator(this.applicationinfo_webelements.ReserveType_Dropdown).click()
        await this.page.locator(this.applicationinfo_webelements.Reserve).click()
        // await this.page.locator(this.applicationinfo_webelements.ConsignmentSpecialist).click()
        // await this.page.waitForTimeout(3000)
       // await this.page.locator(this.applicationinfo_webelements.ConsignmentSpecialist).click()
        await this.page.locator(this.applicationinfo_webelements.AnothweAuction).click()
        await this.page.locator(this.applicationinfo_webelements.SelectYes).click()
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
    }
    async ReviewApp()
    {
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.applicationinfo_webelements.SignatureName).fill(this.testdata.Signature)
        await this.page.locator(this.applicationinfo_webelements.Calendar).click()
        await this.page.locator(this.applicationinfo_webelements.CurrentDate).click()
        await this.page.locator(this.applicationinfo_webelements.SubmitApplicaion).click()
    }
}