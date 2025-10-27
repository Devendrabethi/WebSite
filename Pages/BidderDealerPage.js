import { expect } from '@playwright/test'
import { AddVIN_WebElements } from '../WebElements/AddVIN_WebElements.js'    
import { TestData } from '../TestData/testdata.js';
import { AddMedia_WebElements } from '../WebElements/AddMedia_WebElements.js'  
import { TitleDocument_WebElements } from '../WebElements/TitleDocument_WebElements.js'  
import { Business_WeElements } from '../WebElements/Business_WeElements.js' 
import { BidderIndividual_WebElements } from '../WebElements/BidderIndividual_WebElements.js' 
import { BidderBusiness_WebElements } from '../WebElements/BidderBusiness_WebElements.js' 
import { BidderDealer_WebElements } from '../WebElements/BidderDealer_WebElements.js' 
import { ApplicationInfo_WebElements } from '../WebElements/ApplicationInfo_WebElements.js'  

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
        this.applicationinfo_webelements =  new ApplicationInfo_WebElements()
        this.testdata = new TestData()
    }
    async BidderOpportunityAbsentee()
    {
        await this.page.setViewportSize({ width: 1920, height: 950 })
        await this.page.goto(this.testdata.Bidder_AbsenteeBidderURL) 
        await this.page.waitForTimeout(6000)
       // await this.page.reload()
        await this.page.locator(this.bidderindividual_webelements.Acceptpopup).click() 
    }
    async BidderOpportunityPre_premium()
    {
        await this.page.setViewportSize({ width: 1920, height: 950 })
        await this.page.goto(this.testdata.Bidder_Pre_premiumURL)  
        await this.page.waitForTimeout(6000)
        //await this.page.reload()
        await this.page.locator(this.bidderindividual_webelements.Acceptpopup).click() 
    }
    async BidderOpportunityAbsenteeyes()
    {
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()  
    }

    async DealerRegistration()
    {
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderdealer_webelements.SelectDealerBox).click()
        await this.page.locator(this.bidderdealer_webelements.DealerName).fill(this.testdata.DealerName)
        await this.page.locator(this.bidderdealer_webelements.DealerePhoneNum_Field).fill(this.testdata.DealerPhoneNum)


          //Dealer NUmber
          function generateRandomString(length) 
          {
              const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
              let result = '';
              for (let i = 0; i < length; i++) {
                  result += chars.charAt(Math.floor(Math.random() * chars.length));
              }
              return result;
          }
          const randomDealerNum = generateRandomString(Math.floor(Math.random() * (26-19)) + 5);
          
      
          const DealerNum = "Deva" +randomDealerNum;
          await this.page.locator(this.bidderdealer_webelements.DealerLicense_Field).click()
          await this.page.locator(this.bidderdealer_webelements.DealerLicense_Field).fill(DealerNum)

       // await this.page.locator(this.bidderdealer_webelements.DealerLicense_Field).fill(this.testdata.DealerLNum)


        await this.page.locator(this.bidderdealer_webelements.TaxID_Field).fill(this.testdata.ResaleTaxIdNum)
        await this.page.locator(this.bidderdealer_webelements.RelationshipDealer).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.bidderdealer_webelements.SelectRepresentative).click()
        await this.page.locator(this.bidderdealer_webelements.DealerState_Field).fill(this.testdata.LicState)
        await this.page.waitForTimeout(1000)
        await this.page.screenshot({ path: './ScreenShot/BidderDealerDetails.png', fullPage: true})
            //    await this.page.locator(this.bidderdealer_webelements.SelectDealerState).click()  in UAT not working dropdown
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()   
    }
    async DesiredBidLimit()
    {
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderdealer_webelements.DesiredBidLimit_Field).click()
        await this.page.locator(this.bidderdealer_webelements.DesiredBidLimit_Field).fill(this.testdata.BidLimitValue)
        await this.page.keyboard.press('Tab')
        await this.page.locator(this.bidderdealer_webelements.PersonalCheckBox).click()

        const fileToUpload1 = 
        {
            "PersonalCheckBankLGranteeDoc" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\business Lpng.png"
        }
        await this.page.waitForTimeout(2000);
        // Upload each photo to its respective field
        await this.page.locator(this.bidderdealer_webelements.PersonalCheckBankLGranteeDoc).setInputFiles(fileToUpload1.PersonalCheckBankLGranteeDoc);
        await this.page.waitForTimeout(5000)
        await this.page.screenshot({ path: './ScreenShot/DesireBidLimitWithFundLetter.png', fullPage: true})
        await this.page.locator(this.bidderbusiness_webelements.Nextbtn).click()  
    }

    async DealerWithoutDocUploadingfromDashboard()
    {
        await this.page.waitForTimeout(15000)
        await this.page.screenshot({ path: './ScreenShot/BidderDealerDocuments.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()  

    }
    async DealerDocument()
    {
        const fileToUpload2 = 
        {
            "DealerLicense" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\side.png",
            "ResaleLicense" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\engine.heic",
            "VerificationOwnDoc" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\vin.heif",
            "AuthorizationDoc" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Insurance.pdf"
        }
        await this.page.waitForTimeout(2000);
        // Upload each photo to its respective field
        await this.page.locator(this.bidderdealer_webelements.DealerDoc).setInputFiles(fileToUpload2.DealerLicense);
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.bidderdealer_webelements.DealerExpDateCalendar).click()
        await this.page.waitForTimeout(500);
       await this.page.locator(this.bidderindividual_webelements.ChangeMonth).click()
        await this.page.locator(this.bidderindividual_webelements.SelectDecember).click()
        await this.page.locator(this.bidderindividual_webelements.SelectDate).click()
        await this.page.locator(this.bidderdealer_webelements.ResaleDoc).setInputFiles(fileToUpload2.ResaleLicense);
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.bidderdealer_webelements.ResaleExpDateCalandar).click()
        await this.page.waitForTimeout(500);
        await this.page.locator(this.bidderindividual_webelements.ChangeMonth).click()
        await this.page.locator(this.bidderindividual_webelements.SelectDecember).click()
        await this.page.locator(this.bidderindividual_webelements.SelectDate).click()
        await this.page.locator(this.bidderdealer_webelements.VerificationOwnDoc).setInputFiles(fileToUpload2.VerificationOwnDoc);
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.bidderdealer_webelements.AuthorizationDoc).setInputFiles(fileToUpload2.AuthorizationDoc);
        await this.page.waitForTimeout(1000)
        await this.page.screenshot({ path: './ScreenShot/BidderDealerDocuments.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()  

    }
        async CCDepositeDesiredBidLimit()
    {
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderdealer_webelements.DesiredBidLimit_Field).click()
        await this.page.locator(this.bidderdealer_webelements.DesiredBidLimit_Field).fill(this.testdata.BidLimitValue)
        await this.page.locator(this.bidderdealer_webelements.CreditCardHoldBox).click()
        await this.page.screenshot({ path: './ScreenShot/DesireBidLimitWithCreditCardHold.png', fullPage: true})
        await this.page.locator(this.bidderbusiness_webelements.Nextbtn).click()  
    }
    async CCDepositeCardDetails()
    {
        await this.page.waitForTimeout(2000)
        //await this.page.locator(this.bidderindividual_webelements.CardFullName).fill(this.testdata.CCCardFullName)
        await this.page.locator(this.bidderindividual_webelements.CardDetails_Checkbox).click()
        await this.page.locator(this.applicationinfo_webelements.MallingAddress).fill(this.testdata.MailingAddress)
        await this.page.locator(this.applicationinfo_webelements.SelectAddress).click()
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/Entered New Address in Payment Page.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.RetrySearch).click()
        await this.page.locator(this.bidderindividual_webelements.Slect_ExistingAddress).click()
        await this.page.locator(this.bidderindividual_webelements.Select_MailingAddress).click()
        await this.page.screenshot({ path: './ScreenShot/Billing existing address.png', fullPage: true})
        await this.page.locator(this.bidderindividual_webelements.ConfirmSelection).click()
        await this.page.waitForTimeout(2000)

        const frame = await this.page.frameLocator(this.bidderindividual_webelements.frame)

        //await this.page.locator(this.bidderindividual_webelements.CardNum).click()
        await frame.locator(this.bidderindividual_webelements.CardNum).fill(this.testdata.CCDepositeCard)
        //await this.page.locator(this.bidderindividual_webelements.CardExpDate).click()
        await frame.locator(this.bidderindividual_webelements.CardExpDate).fill(this.testdata.CardExp)
        //await this.page.locator(this.bidderindividual_webelements.Cvv).click()
        await frame.locator(this.bidderindividual_webelements.Cvv).fill(this.testdata.CVVNum)
        //await this.page.locator(this.bidderindividual_webelements.ZipCode).click()
        await frame.locator(this.bidderindividual_webelements.CCZipCode).fill(this.testdata.CCZIpCode)

        // await this.page.locator(this.bidderindividual_webelements.CCAddress_Field).fill(this.testdata.AddressSearch)
        // await this.page.locator(this.titledocument_webelements.SelectAddress).click()
        await this.page.screenshot({ path: './ScreenShot/PaymentDetailsForCCDeposit.png', fullPage: true})
        await this.page.locator(this.bidderindividual_webelements.CCNextbtn).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderindividual_webelements.ViewBidderOpportunity).click()

    }
}