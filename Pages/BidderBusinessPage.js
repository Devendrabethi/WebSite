import { expect } from '@playwright/test'
import { AddVIN_WebElements } from '../WebElements/AddVIN_WebElements.js'    
import { TestData } from '../TestData/testdata.js';
import { AddMedia_WebElements } from '../WebElements/AddMedia_WebElements.js'  
import { TitleDocument_WebElements } from '../WebElements/TitleDocument_WebElements.js'  
import { Business_WeElements } from '../WebElements/Business_WeElements.js' 
import { BidderIndividual_WebElements } from '../WebElements/BidderIndividual_WebElements.js' 
import { BidderBusiness_WebElements } from '../WebElements/BidderBusiness_WebElements.js' 

exports.BidderBusinessPage =
class BidderBusinessPage
{
    constructor(page)
    {
        this.page = page
        this.addVIN_webelements =  new AddVIN_WebElements()
        this.addmedia_webelements =  new AddMedia_WebElements()
        this.titledocument_webelements =  new TitleDocument_WebElements()
        this.business_webelements =  new Business_WeElements()
        this.bidderindividual_webelements =  new BidderIndividual_WebElements()
        this.bidderbusiness_webelements =  new BidderBusiness_WebElements()
        this.testdata = new TestData()
    }
    async BidderOpportunitySelect()
    {
        await this.page.setViewportSize({ width: 1920, height: 950 })
        await this.page.goto(this.testdata.BidderSelectURL)
    }

    async BusinessRegistration()
    {
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderbusiness_webelements.SelectBusinessBox).click()
        await this.page.locator(this.bidderbusiness_webelements.BusinessName).fill(this.testdata.BusinessNameText)
        await this.page.locator(this.bidderbusiness_webelements.BusinessPhoneNum_Field).fill(this.testdata.BusPhoneNum)


        //Business Ein
        function generateRandomString(length) 
        {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
            let result = '';
            for (let i = 0; i < length; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return result;
        }
        const randomEinNum = generateRandomString(Math.floor(Math.random() * (26-19)) + 5);
        
    
        const EinNum = "Deva" +randomEinNum;
        await this.page.locator(this.bidderbusiness_webelements.Ein_Field).click()
        await this.page.locator(this.bidderbusiness_webelements.Ein_Field).fill(EinNum)

       // await this.page.locator(this.bidderbusiness_webelements.Ein_Field).fill(this.testdata.BusinessEin)



        await this.page.locator(this.bidderbusiness_webelements.RelationshipBusiness).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.bidderbusiness_webelements.SelectOwner).click()
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()   
    }
    async DesiredBidLimit()
    {
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderbusiness_webelements.DesiredBidLimit_Field).click()
        await this.page.locator(this.bidderbusiness_webelements.DesiredBidLimit_Field).fill(this.testdata.BidLimitValue)
        await this.page.locator(this.bidderbusiness_webelements.FinancingBox).click()
        await this.page.locator(this.bidderbusiness_webelements.Nextbtn).click()  
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.bidderbusiness_webelements.SelectRadiobtn).click()
        await this.page.locator(this.bidderbusiness_webelements.SubmitFinancing).click()
    }
    async BusinessDocument()
    {
        const fileToUpload2 = 
        {
            "businessL" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\business Lpng.png"
        }
        await this.page.waitForTimeout(2000);
        // Upload each photo to its respective field
        await this.page.locator(this.bidderbusiness_webelements.BusinessDoc).setInputFiles(fileToUpload2.businessL);
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()  

    }
}