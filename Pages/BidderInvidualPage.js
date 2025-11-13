import { expect } from '@playwright/test'
import { AddVIN_WebElements } from '../WebElements/AddVIN_WebElements.js'    
import { TestData } from '../TestData/testdata.js';
import { AddMedia_WebElements } from '../WebElements/AddMedia_WebElements.js'  
import { TitleDocument_WebElements } from '../WebElements/TitleDocument_WebElements.js'  
import { Business_WeElements } from '../WebElements/Business_WeElements.js' 
import { BidderIndividual_WebElements } from '../WebElements/BidderIndividual_WebElements.js' 
import { ApplicationInfo_WebElements } from '../WebElements/ApplicationInfo_WebElements.js'  

exports.BidderInvidualPage =
class BidderInvidualPage
{
    constructor(page)
    {
        this.page = page
        this.addVIN_webelements =  new AddVIN_WebElements()
        this.addmedia_webelements =  new AddMedia_WebElements()
        this.titledocument_webelements =  new TitleDocument_WebElements()
        this.business_webelements =  new Business_WeElements()
        this.bidderindividual_webelements =  new BidderIndividual_WebElements()
        this.applicationinfo_webelements =  new ApplicationInfo_WebElements()
        this.testdata = new TestData()
    }
    async BidderOpportunityPremium()
    {
        await this.page.setViewportSize({ width: 1920, height: 950 })
        await this.page.goto(this.testdata.BidderPremiumURL)
        await this.page.waitForTimeout(6000)
        //await this.page.reload()
        await this.page.locator(this.bidderindividual_webelements.Acceptpopup).click()
    }
       async BidderOpportunityRegularBidderMobilia()
    {
        await this.page.setViewportSize({ width: 1920, height: 950 })
        await this.page.goto(this.testdata.RegularBidderMobilia)
        await this.page.waitForTimeout(6000)
        //await this.page.reload()
        await this.page.locator(this.bidderindividual_webelements.Acceptpopup).click()
    }
    async IndividualDetails()
    {
        await this.page.waitForTimeout(1000)
        const fileToUpload1 = 
        {
            "DriverLicense" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Driver License.jpg"
        }

        // Upload each photo to its respective field
        await this.page.locator(this.bidderindividual_webelements.DriverLicenseDoc).setInputFiles(fileToUpload1.DriverLicense);
        await this.page.waitForTimeout(2000);

        
            //first and last names
            function generateRandomString(length) {
                const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                let result = '';
                for (let i = 0; i < length; i++) {
                    result += chars.charAt(Math.floor(Math.random() * chars.length));
                }0
                return result;
            }
    
            // Generate random first and last names (e.g., 5-10 characters each)
            const randomFirstName = generateRandomString(Math.floor(Math.random() * (26-19)) + 1);
            const randomLastName = generateRandomString(Math.floor(Math.random() * (26-19)) + 1);
    
            const firstName = "Dev" + randomFirstName;
            const lastName = "Ind" + randomLastName;
    
            // Fill the form fields with the generated names
            await this.page.locator(this.addVIN_webelements.Firstname).fill(firstName);
            await this.page.locator(this.addVIN_webelements.Middlename).fill(this.testdata.MiddleName);
            await this.page.locator(this.addVIN_webelements.Lastname).fill(lastName);

            await this.page.locator(this.bidderindividual_webelements.MobileNumber_Field).fill(this.testdata.MobileNum);
            await this.page.screenshot({ path: './ScreenShot/BidderPersonalDetailsWithDriverLicence.png', fullPage: true})
            await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
    }
    async IndividualRegistration()
    {
        await this.page.locator(this.bidderindividual_webelements.SelectIndividualBox).click({timeout:60000})
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/BidderIndividualRegistration.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()   
    }
    async AddressDetails()
    {
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderindividual_webelements.Biddingaddress).fill(this.testdata.BiddingAddress,{timeout:60000})
        await this.page.locator(this.bidderindividual_webelements.SelectAddress).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.bidderindividual_webelements.TitlePaperwork).fill(this.testdata.TitlePaperworkAddress)
        await this.page.locator(this.bidderindividual_webelements.SelectAddress).click()
        await this.page.waitForTimeout(1000)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.bidderindividual_webelements.Vehicleaddress).fill(this.testdata.VehicleAddress)
        await this.page.locator(this.bidderindividual_webelements.SelectAddress).click()
        await this.page.waitForTimeout(1000)
        await this.page.waitForTimeout(500)
       // await this.page.locator(this.titledocument_webelements.CheckboxforAllAddress).click()
        await this.page.locator(this.bidderindividual_webelements.MallingAddress).fill(this.testdata.MailingAddress)
        await this.page.locator(this.bidderindividual_webelements.SelectAddress).click()
        await this.page.waitForTimeout(500)
        await this.page.screenshot({ path: './ScreenShot/BidderIndividualMailingAddress.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()   
    }
    async RegularBidderMobiliaAddressDetails()
    {
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderindividual_webelements.MallingAddress).fill(this.testdata.MailingAddress)
        await this.page.locator(this.bidderindividual_webelements.SelectAddress).click()
        await this.page.screenshot({ path: './ScreenShot/BidderReglarIndividualMailingAddress.png', fullPage: true})
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()   
    }
    async DesiredBidLimit()
    {
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderindividual_webelements.DesiredBidLimit_Field).click()
        await this.page.locator(this.bidderindividual_webelements.DesiredBidLimit_Field).fill(this.testdata.BidLimitValue,{timeout:4000})
        await this.page.keyboard.press('Tab')
        await this.page.locator(this.bidderindividual_webelements.BiddingCollateralBox).click()
        await this.page.screenshot({ path: './ScreenShot/DesiredBidLimitWithBiddingCollateral.png', fullPage: true})
        await this.page.waitForTimeout(5000)
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()  
    }
    async AdditionalWithoutDocumentUploadingfromDashboard()
    {
        const fileToUpload2 = 
        {
            "CustomerPhoto" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Insurance.pdf",
        }
        await this.page.waitForTimeout(2000);
        // Upload each photo to its respective field
        await this.page.locator(this.bidderindividual_webelements.CustomerPhoto).setInputFiles(fileToUpload2.CustomerPhoto);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.bidderindividual_webelements.Crop).click()
        await this.page.waitForTimeout(2000);
        await this.page.screenshot({ path: './ScreenShot/AdditionalDocument.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
    }
    async AdditionalDocument()
    {
        const fileToUpload2 = 
        {
            "CustomerPhoto" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Insurance.pdf",
            "Insurance" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Insurance.pdf"
        }
        await this.page.waitForTimeout(2000);
        // Upload each photo to its respective field
        await this.page.locator(this.bidderindividual_webelements.CustomerPhoto).setInputFiles(fileToUpload2.CustomerPhoto);
        await this.page.waitForTimeout(5000);
        await this.page.locator(this.bidderindividual_webelements.Crop).click()
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.bidderindividual_webelements.Insurance).setInputFiles(fileToUpload2.Insurance)
        await this.page.locator(this.bidderindividual_webelements.Calendar).click()
        await this.page.waitForTimeout(500);
        await this.page.locator(this.bidderindividual_webelements.ChangeMonth).click()
        await this.page.locator(this.bidderindividual_webelements.SelectDecember).click()
        await this.page.locator(this.bidderindividual_webelements.SelectDate).click()
        await this.page.screenshot({ path: './ScreenShot/AdditionalDocument.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()  
    }
    async AddProducts()
    {
        try 
        {
            await this.page.locator(this.bidderindividual_webelements.FirstProduct).click();
            await this.page.locator(this.bidderindividual_webelements.FirstProduct).click();
        }
        catch (error) 
        {
            console.error("No Products", error);
        }
        try
        {
            await this.page.locator(this.bidderindividual_webelements.SecoundProduct).click();
            await this.page.locator(this.bidderindividual_webelements.SecoundProduct).click();
        }
        catch (error) 
        {
            console.error("No Products", error);
            // You can add more error handling code here (e.g., take a screenshot, log to a file, etc.)
        }
        try
        {
            await this.page.locator(this.bidderindividual_webelements.ThiredProduct).click();
            await this.page.locator(this.bidderindividual_webelements.ThiredProduct).click();
        }
        catch (error) 
        {
            console.error("No Products", error);
            // You can add more error handling code here (e.g., take a screenshot, log to a file, etc.)
        }
        try 
        {
            // Check if the fourth product exists and is visible
            const fourthProductLocator = this.page.locator(this.bidderindividual_webelements.FourthProduct);
            const isFourthProductVisible = await fourthProductLocator.isVisible();
            
            if (isFourthProductVisible)
           {
                await fourthProductLocator.click();
                await fourthProductLocator.click();
            } 
            else
            {
                console.log("The fourth product is not visible, skipping click.");
            }
        } catch (error) {
            console.error("An error occurred during the clicking process:", error);
        }
        try 
        {
            // Check if the fivth product exists and is visible
            const FivethProductLocator = this.page.locator(this.bidderindividual_webelements.MuscleLoungeQuantity);
            const isFivethProductVisible = await FivethProductLocator.isVisible();
            
            if (isFivethProductVisible)
           {
                await FivethProductLocator.click();
                await FivethProductLocator.click();
            } 
            else
            {
                console.log("The fivth product is not visible, skipping click.");
            }
        } catch (error) {
            console.error("An error occurred during the clicking process:", error);
        }

        await this.page.screenshot({ path: './ScreenShot/Products.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()  
        await this.page.waitForTimeout(2000)
    }
    async CardDetails()
    {
        await this.page.waitForTimeout(2000)
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
        const frame = await this.page.frameLocator(this.bidderindividual_webelements.frame)
        await frame.locator(this.bidderindividual_webelements.CardNum).fill(this.testdata.CardCC)
        await frame.locator(this.bidderindividual_webelements.CardExpDate).fill(this.testdata.CardExp)
        await frame.locator(this.bidderindividual_webelements.Cvv).fill(this.testdata.CVVNum)
        await frame.locator(this.bidderindividual_webelements.ZipCode).fill(this.testdata.ZipCOde)
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderindividual_webelements.SubmitOpportunity).click({timeout:90000})
        await this.page.screenshot({ path: './ScreenShot/PaymentDetails.png', fullPage: true})
        await this.page.waitForTimeout(2000)
    }

    async PersonalDocuSign()
    {
        const frame1 = await this.page.frameLocator(this.bidderindividual_webelements.FrameDocuSign1)
        const frame2 = await frame1.frameLocator(this.bidderindividual_webelements.FrameDocuSign2)

        await frame2.locator(this.bidderindividual_webelements.checkbox).click({timeout:120000})
        await this.page.screenshot({ path: './ScreenShot/DocuSign.png', fullPage: true})
        await frame2.locator(this.bidderindividual_webelements.continuebtn).click()
        await this.page.waitForTimeout(1000)
        await frame2.locator(this.bidderindividual_webelements.personalsignin).click()
        await this.page.screenshot({ path: './ScreenShot/PersonalDocuSign.png', fullPage: true})
        await frame2.locator(this.bidderindividual_webelements.AdoptandSign).click()
        await this.page.waitForTimeout(15000)
        await frame2.locator(this.bidderindividual_webelements.BuyerInitialSecondPage).click()
        await this.page.waitForTimeout(1000)
        await frame2.locator(this.bidderindividual_webelements.BuyerInitialThirdPage).click()
        await this.page.waitForTimeout(1000)
        await this.page.screenshot({ path: './ScreenShot/DocuSignSubmit.png', fullPage: true})
        await frame1.locator(this.bidderindividual_webelements.SubmitApplication).click()
        
    }
    async AbsenteeDocuSign()
    {
        const frame1 = await this.page.frameLocator(this.bidderindividual_webelements.FrameDocuSign1)
        const frame2 = await frame1.frameLocator(this.bidderindividual_webelements.FrameDocuSign2)

        await frame2.locator(this.bidderindividual_webelements.checkbox).click({timeout:120000})
        await this.page.screenshot({ path: './ScreenShot/DocuSign.png', fullPage: true})
        await frame2.locator(this.bidderindividual_webelements.continuebtn).click()
        await this.page.waitForTimeout(1000)
        await frame2.locator(this.bidderindividual_webelements.Absentee_Personalsignin).click()
        await this.page.screenshot({ path: './ScreenShot/PersonalDocuSign.png', fullPage: true})
        await frame2.locator(this.bidderindividual_webelements.AdoptandSign).click()
        await this.page.waitForTimeout(15000)
        await frame2.locator(this.bidderindividual_webelements.BuyerInitialSecondPage).click()
        await this.page.waitForTimeout(1000)
        await frame2.locator(this.bidderindividual_webelements.BuyerInitialThirdPage).click()
        await this.page.waitForTimeout(1000)
        await frame2.locator(this.bidderindividual_webelements.Absentee_PrintName).fill(this.testdata.Signature)
        await frame2.locator(this.bidderindividual_webelements.Absentee_SignatureRequired).click()
        await this.page.screenshot({ path: './ScreenShot/DocuSignSubmit.png', fullPage: true})
        await frame1.locator(this.bidderindividual_webelements.SubmitApplication).click()
    }

    async ViewBidderOpportunity()
    {
        await this.page.locator(this.bidderindividual_webelements.ViewBidderOpportunity).click()
        await this.page.waitForTimeout(15000)
        await this.page.screenshot({ path: './ScreenShot/RegistrationInfo.png', fullPage: true})
        await this.page.locator(this.bidderindividual_webelements.Select_Registration).click()
        await this.page.waitForTimeout(3000)
        await this.page.screenshot({ path: './ScreenShot/RegistrationReg.png', fullPage: true})
        await this.page.locator(this.bidderindividual_webelements.Select_Addresses).click()
        await this.page.waitForTimeout(3000)
        await this.page.screenshot({ path: './ScreenShot/Addresses.png', fullPage: true})
        await this.page.locator(this.bidderindividual_webelements.Select_DocumentsTab).click()
        await this.page.waitForTimeout(3000)
        await this.page.screenshot({ path: './ScreenShot/RegisterDocuments.png', fullPage: true})
        await this.page.locator(this.bidderindividual_webelements.Select_PaymentMethodTab).click()
        await this.page.waitForTimeout(3000)
        await this.page.screenshot({ path: './ScreenShot/PaymentWithHowtoPay.png', fullPage: true})
        await this.page.locator(this.bidderindividual_webelements.Select_BiddingCollateralReturnAddress).click()
        await this.page.waitForTimeout(3000)
        await this.page.screenshot({ path: './ScreenShot/BiddingCollateralReturnAddress.png', fullPage: true})
        await this.page.locator(this.bidderindividual_webelements.Select_AbsenteeBidsTab).click()
        await this.page.waitForTimeout(3000)
        await this.page.screenshot({ path: './ScreenShot/MyAbsenteeBids.png', fullPage: true})
    }
    async BidderDashboardWithoutDocument()
    {
        await this.page.locator(this.bidderindividual_webelements.ViewBidderOpportunity).click()
        await this.page.waitForTimeout(15000)
        await this.page.screenshot({ path: './ScreenShot/RegistrationInfo.png', fullPage: true})
        await this.page.locator(this.bidderindividual_webelements.Select_Registration).click()
        await this.page.waitForTimeout(3000)
        await this.page.screenshot({ path: './ScreenShot/RegistrationReg.png', fullPage: true})
        await this.page.locator(this.bidderindividual_webelements.Select_Addresses).click()
        await this.page.waitForTimeout(3000)
        await this.page.screenshot({ path: './ScreenShot/Addresses.png', fullPage: true})
        await this.page.locator(this.bidderindividual_webelements.Select_DocumentsTab).click()

            const fileToUpload = 
        {
           "Insurance" :               "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\rare.gif",
           "DealerLicense":            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\side.png",
           "ResaleTaxID":              "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\engine.heic",
           "VerificationOfOwnership":  "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\vin.heif",
           "AuthorizationToBid":       "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Insurance.pdf"
        }
        await this.page.locator(this.bidderindividual_webelements.FirstDocument).click()
        await this.page.locator(this.bidderindividual_webelements.AdditionalPhotos).setInputFiles(fileToUpload.Insurance)
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.bidderindividual_webelements.Upload_Button).click()
        await this.page.waitForTimeout(5000);
        await this.page.locator(this.bidderindividual_webelements.SecondDocument).click()
        await this.page.locator(this.bidderindividual_webelements.AdditionalPhotos).setInputFiles(fileToUpload.DealerLicense)
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.bidderindividual_webelements.Upload_Button).click()
        await this.page.waitForTimeout(5000);
        await this.page.locator(this.bidderindividual_webelements.ThirdDocument).click()
        await this.page.locator(this.bidderindividual_webelements.AdditionalPhotos).setInputFiles(fileToUpload.ResaleTaxID)
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.bidderindividual_webelements.Upload_Button).click()
        await this.page.waitForTimeout(5000);
        await this.page.locator(this.bidderindividual_webelements.FourthDocument).click()
        await this.page.locator(this.bidderindividual_webelements.AdditionalPhotos).setInputFiles(fileToUpload.VerificationOfOwnership)
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.bidderindividual_webelements.Upload_Button).click()
        await this.page.waitForTimeout(5000);
        await this.page.locator(this.bidderindividual_webelements.FivthDocument).click()
        await this.page.locator(this.bidderindividual_webelements.AdditionalPhotos).setInputFiles(fileToUpload.AuthorizationToBid)
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.bidderindividual_webelements.Upload_Button).click()
        await this.page.waitForTimeout(5000);
        await this.page.reload()
        await this.page.waitForTimeout(20000);
        await this.page.screenshot({ path: './ScreenShot/DealerWithDocuments.png', fullPage: true})
        await this.page.locator(this.bidderindividual_webelements.Select_PaymentMethodTab).click()
        await this.page.waitForTimeout(2000);
        await this.page.screenshot({ path: './ScreenShot/PaymentMethod.png', fullPage: true})
        await this.page.locator(this.bidderindividual_webelements.Select_BiddingCollateralReturnAddress).click()
        await this.page.waitForTimeout(2000);
        await this.page.screenshot({ path: './ScreenShot/BiddingCollaterralAddress.png', fullPage: true})
        await this.page.locator(this.bidderindividual_webelements.Select_AbsenteeBidsTab).click()
        await this.page.waitForTimeout(2000);
        await this.page.screenshot({ path: './ScreenShot/AbsenteeBidTab.png', fullPage: true})
        
    }
}