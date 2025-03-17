import { expect } from '@playwright/test'
import { AddVIN_WebElements } from '../WebElements/AddVIN_WebElements.js'    
import { TestData } from '../TestData/testdata.js';
import { AddMedia_WebElements } from '../WebElements/AddMedia_WebElements.js'  
import { TitleDocument_WebElements } from '../WebElements/TitleDocument_WebElements.js'  
import { Business_WeElements } from '../WebElements/Business_WeElements.js' 
import { BidderIndividual_WebElements } from '../WebElements/BidderIndividual_WebElements.js' 

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
        this.testdata = new TestData()
    }
    async BidderOpportunityPremium()
    {
        await this.page.setViewportSize({ width: 1920, height: 950 })
        await this.page.goto(this.testdata.BidderPremiumURL)
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
            await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
    }
    async IndividualRegistration()
    {
        await this.page.locator(this.bidderindividual_webelements.SelectIndividualBox).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()   
    }
    async AddressDetails()
    {
        await this.page.waitForTimeout(2000)
        // await this.page.locator(this.bidderindividual_webelements.Biddingaddress).fill(this.testdata.BiddingAddress)
        // await this.page.locator(this.bidderindividual_webelements.SelectAddress).click()
        // await this.page.locator(this.titledocument_webelements.CountydDropdown).click()
        // await this.page.waitForTimeout(500)
        // await this.page.locator(this.titledocument_webelements.CountydDropdown).click()
        // await this.page.locator(this.bidderindividual_webelements.TitlePaperwork).fill(this.testdata.TitlePaperworkAddress)
        // await this.page.locator(this.bidderindividual_webelements.SelectAddress).click()
        // await this.page.waitForTimeout(1000)
        // await this.page.locator(this.titledocument_webelements.CountydDropdown).click()
        // await this.page.waitForTimeout(500)
        await this.page.locator(this.titledocument_webelements.CheckboxforAllAddress).click()
        await this.page.locator(this.bidderindividual_webelements.MallingAddress).fill(this.testdata.MailingAddress)
        await this.page.locator(this.bidderindividual_webelements.SelectAddress).click()
                    await this.page.locator(this.titledocument_webelements.CountydDropdown).click()
                    await this.page.waitForTimeout(500)
                    await this.page.locator(this.titledocument_webelements.CountydDropdown).click()
        // await this.page.locator(this.bidderindividual_webelements.Vehicleaddress).fill(this.testdata.VehicleAddress)
        // await this.page.locator(this.bidderindividual_webelements.SelectAddress).click()
        // await this.page.waitForTimeout(1000)
        // await this.page.locator(this.titledocument_webelements.CountydDropdown).click()
        // await this.page.waitForTimeout(500)
        // await this.page.locator(this.titledocument_webelements.CountydDropdown).click()
      
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()   
    }
    async DesiredBidLimit()
    {
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderindividual_webelements.DesiredBidLimit_Field).click()
        await this.page.locator(this.bidderindividual_webelements.DesiredBidLimit_Field).fill(this.testdata.BidLimitValue)
        await this.page.locator(this.bidderindividual_webelements.BiddingCollateralBox).click()
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
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.bidderindividual_webelements.Crop).click()
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.bidderindividual_webelements.Insurance).setInputFiles(fileToUpload2.Insurance)
        await this.page.locator(this.bidderindividual_webelements.Calendar).click()
        await this.page.waitForTimeout(500);
        await this.page.locator(this.bidderindividual_webelements.NextMonth).click()
        await this.page.waitForTimeout(500);
        await this.page.locator(this.bidderindividual_webelements.NextMonth).click()
        await this.page.waitForTimeout(500);
        await this.page.locator(this.bidderindividual_webelements.NextMonth).click()
        await this.page.waitForTimeout(500);
        await this.page.locator(this.bidderindividual_webelements.SelectDate).click()
        await this.page.waitForTimeout(2000)
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
            console.error("An error occurred during the clicking process:", error);
            // You can add more error handling code here (e.g., take a screenshot, log to a file, etc.)
        }
        try
        {
            await this.page.locator(this.bidderindividual_webelements.SecoundProduct).click();
            await this.page.locator(this.bidderindividual_webelements.SecoundProduct).click();
        }
        catch (error) 
        {
            console.error("An error occurred during the clicking process:", error);
            // You can add more error handling code here (e.g., take a screenshot, log to a file, etc.)
        }
        try
        {
            await this.page.locator(this.bidderindividual_webelements.ThiredProduct).click();
            await this.page.locator(this.bidderindividual_webelements.ThiredProduct).click();
        }
        catch (error) 
        {
            console.error("An error occurred during the clicking process:", error);
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
            // You can add more error handling code here (e.g., take a screenshot, log to a file, etc.)
        }

        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()  
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderindividual_webelements.MuscleLoungeQuantity).click()
        await this.page.locator(this.bidderindividual_webelements.MuscleLoungeQuantity).click()
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()  
    }
    async CardDetails()
    {
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderindividual_webelements.CardFirstName).fill(this.testdata.CardFName)
        await this.page.locator(this.bidderindividual_webelements.CardLastName).fill(this.testdata.CardLName)
        await this.page.waitForTimeout(2000)

        const frame = await this.page.frameLocator(this.bidderindividual_webelements.frame)

        //await this.page.locator(this.bidderindividual_webelements.CardNum).click()
        await frame.locator(this.bidderindividual_webelements.CardNum).fill(this.testdata.CardCC)
        //await this.page.locator(this.bidderindividual_webelements.CardExpDate).click()
        await frame.locator(this.bidderindividual_webelements.CardExpDate).fill(this.testdata.CardExp)
        //await this.page.locator(this.bidderindividual_webelements.Cvv).click()
        await frame.locator(this.bidderindividual_webelements.Cvv).fill(this.testdata.CVVNum)
        //await this.page.locator(this.bidderindividual_webelements.ZipCode).click()
        await frame.locator(this.bidderindividual_webelements.ZipCode).fill(this.testdata.ZipCOde)

        await this.page.locator(this.bidderindividual_webelements.SubmitOpportunity).click()
        await this.page.waitForTimeout(2000)
        //await this.page.locator(this.bidderindividual_webelements.ViewBidderOpportunity).click()
    }

    async PersonalDocuSign()
    {
        const frame1 = await this.page.frameLocator(this.bidderindividual_webelements.FrameDocuSign1)
        const frame2 = await frame1.frameLocator(this.bidderindividual_webelements.FrameDocuSign2)

        await frame2.locator(this.bidderindividual_webelements.checkbox).click()
        await frame2.locator(this.bidderindividual_webelements.continuebtn).click()
        await this.page.waitForTimeout(1000)
        await frame2.locator(this.bidderindividual_webelements.personalsignin).click()
        await frame2.locator(this.bidderindividual_webelements.AdoptandSign).click()
        await this.page.waitForTimeout(15000)
        await frame2.locator(this.bidderindividual_webelements.BuyerInitialSecondPage).click()
        await this.page.waitForTimeout(1000)
        await frame2.locator(this.bidderindividual_webelements.BuyerInitialThirdPage).click()
        await this.page.waitForTimeout(1000)
        await frame1.locator(this.bidderindividual_webelements.SubmitApplication).click()
        
    }

    async ViewBidderOpportunity()
    {
        await this.page.locator(this.bidderindividual_webelements.ViewBidderOpportunity).click()
    }
}