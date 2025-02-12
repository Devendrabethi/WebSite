import { expect } from '@playwright/test'
import { AddVIN_WebElements } from '../WebElements/AddVIN_WebElements.js'    
import { TestData } from '../TestData/testdata.js';
import { AddMedia_WebElements } from '../WebElements/AddMedia_WebElements.js'  
import { TitleDocument_WebElements } from '../WebElements/TitleDocument_WebElements.js'  
import { Business_WeElements } from '../WebElements/Business_WeElements.js' 
import { BidderIndividual_WebElements } from '../WebElements/BidderIndividual_WebElements.js' 
import { BidderBusiness_WebElements } from '../WebElements/BidderBusiness_WebElements.js' 
import { BidderDealer_WebElements } from '../WebElements/BidderDealer_WebElements.js' 

exports.BidderDealerPage =
class BidderDealerPage
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
        this.bidderdealer_webelements =  new BidderDealer_WebElements()
        this.testdata = new TestData()
    }
    async BidderOpportunityAbsentee()
    {
        await this.page.setViewportSize({ width: 1920, height: 950 })
        await this.page.goto(this.testdata.BidderAbsenteeBidderURL)
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()  
    }

    async DealerRegistration()
    {
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderdealer_webelements.SelectDealerBox).click()
        await this.page.locator(this.bidderdealer_webelements.DealerName).fill(this.testdata.DealerName)
        await this.page.locator(this.bidderdealer_webelements.DealerePhoneNum_Field).fill(this.testdata.DealerPhoneNum)
        await this.page.locator(this.bidderdealer_webelements.DealerLicense_Field).fill(this.testdata.DealerLNum)
        await this.page.locator(this.bidderdealer_webelements.TaxID_Field).fill(this.testdata.ResaleTaxIdNum)
        await this.page.locator(this.bidderdealer_webelements.RelationshipDealer).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.bidderdealer_webelements.SelectRepresentative).click()
        await this.page.locator(this.bidderdealer_webelements.DealerState_Field).fill(this.testdata.LicState)
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.bidderdealer_webelements.SelectDealerState).click()
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()   
    }
    async DesiredBidLimit()
    {
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderdealer_webelements.DesiredBidLimit_Field).click()
        await this.page.locator(this.bidderdealer_webelements.DesiredBidLimit_Field).fill(this.testdata.BidLimitValue)
        await this.page.locator(this.bidderdealer_webelements.PersonalCheckBox).click()

        const fileToUpload1 = 
        {
            "PersonalCheckBankLGranteeDoc" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\business Lpng.png"
        }
        await this.page.waitForTimeout(2000);
        // Upload each photo to its respective field
        await this.page.locator(this.bidderdealer_webelements.PersonalCheckBankLGranteeDoc).setInputFiles(fileToUpload1.PersonalCheckBankLGranteeDoc);
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderbusiness_webelements.Nextbtn).click()  
    }
    async DealerDocument()
    {
        const fileToUpload2 = 
        {
            "DealerLicense" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Dealer License.jpg",
            "ResaleLicense" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Resale License.jpg",
            "VerificationOwnDoc" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\operating agreement.jpg",
            "AuthorizationDoc" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\business Lpng.png"
        }
        await this.page.waitForTimeout(2000);
        // Upload each photo to its respective field
        await this.page.locator(this.bidderdealer_webelements.DealerDoc).setInputFiles(fileToUpload2.DealerLicense);
        await this.page.waitForTimeout(1000)
        
        await this.page.locator(this.bidderdealer_webelements.DealerExpDateCalendar).click()
        await this.page.waitForTimeout(500);
        await this.page.locator(this.bidderindividual_webelements.NextMonth).click()
        await this.page.waitForTimeout(500);
        await this.page.locator(this.bidderindividual_webelements.NextMonth).click()
        await this.page.waitForTimeout(500);
        await this.page.locator(this.bidderindividual_webelements.NextMonth).click()
        await this.page.waitForTimeout(500);
        await this.page.locator(this.bidderindividual_webelements.SelectDate).click()
        await this.page.locator(this.bidderdealer_webelements.ResaleDoc).setInputFiles(fileToUpload2.ResaleLicense);
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.bidderdealer_webelements.ResaleExpDateCalandar).click()
        await this.page.waitForTimeout(500);
        await this.page.locator(this.bidderindividual_webelements.NextMonth).click()
        await this.page.waitForTimeout(500);
        await this.page.locator(this.bidderindividual_webelements.NextMonth).click()
        await this.page.waitForTimeout(500);
        await this.page.locator(this.bidderindividual_webelements.NextMonth).click()
        await this.page.waitForTimeout(500);
        await this.page.locator(this.bidderindividual_webelements.SelectDate).click()
        await this.page.locator(this.bidderdealer_webelements.VerificationOwnDoc).setInputFiles(fileToUpload2.VerificationOwnDoc);
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.bidderdealer_webelements.AuthorizationDoc).setInputFiles(fileToUpload2.AuthorizationDoc);
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()  

    }
}