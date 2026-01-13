import { expect } from '@playwright/test'
import { AddVIN_WebElements } from '../WebElements/AddVIN_WebElements.js'    
import { TestData } from '../TestData/testdata.js';
import { Kisosk_WebElements } from '../WebElements/Kisosk_WebElements.js'  
import { BidderIndividual_WebElements } from '../WebElements/BidderIndividual_WebElements.js' 

exports.KioskPage =
class KioskPage
{
    constructor(page)
    {
        this.page = page
        this.addVIN_webelements =  new AddVIN_WebElements()
        this.kisosk_webelements =  new Kisosk_WebElements()
        this.bidderindividual_webelements =  new BidderIndividual_WebElements()
        this.testdata = new TestData()
    }

    async BidderOpportunity()
    {
        await this.page.setViewportSize({ width: 1920, height: 950 })
        await this.page.goto(process.env.KisokEnableURL)
        await this.page.locator(this.addVIN_webelements.Acceptpopup).click({timeout:60000})
        await this.page.waitForTimeout(4000)
    }
    async SelfServiceMode()
    {
        await this.page.locator(this.kisosk_webelements.Select_SelfServiceMode).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.kisosk_webelements.NextStep_Button).click()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.kisosk_webelements.Select_Event).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(process.env.Kiosk_Premium).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(process.env.Kiosk_Select).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(process.env.Kiosk_AbsenteeBidder).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.kisosk_webelements.NextStep_Button).click()
        await this.page.locator(this.kisosk_webelements.Skip_Terminal).click()
    }
    async ManageMode()
    {
        await this.page.locator(this.kisosk_webelements.Select_ManageMode).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.kisosk_webelements.Login_To_Account).click()    
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.addVIN_webelements.Email).click()
        await this.page.locator(this.addVIN_webelements.Email).fill(process.env.Kiosk_ManageModeMail)
        await this.page.locator(this.addVIN_webelements.Password).fill(process.env.Kiosk_Password)
        await this.page.screenshot({ path: './ScreenShot/1.1 LoginAccount.png', fullPage: true})
        await this.page.locator(this.kisosk_webelements.SignIn_Button).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.kisosk_webelements.Continue_Button).click()
        await this.page.locator(this.kisosk_webelements.Select_Event).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(process.env.Kiosk_Premium).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(process.env.Kiosk_Select).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(process.env.Kiosk_AbsenteeBidder).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.kisosk_webelements.NextStep_Button).click()
        await this.page.locator(this.kisosk_webelements.Skip_Terminal).click()
        await this.page.locator(this.kisosk_webelements.SkipEmail).click()
    }
        async WithExistingEmail_ManageMode()
    {
        await this.page.locator(this.kisosk_webelements.Select_ManageMode).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.kisosk_webelements.Login_To_Account).click()    
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.addVIN_webelements.Email).click()
        await this.page.locator(this.addVIN_webelements.Email).fill(process.env.Kiosk_ManageModeMail)
        await this.page.locator(this.addVIN_webelements.Password).fill(process.env.Kiosk_Password)
        await this.page.screenshot({ path: './ScreenShot/1.1 LoginAccount.png', fullPage: true})
        await this.page.locator(this.kisosk_webelements.SignIn_Button).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.kisosk_webelements.Continue_Button).click()
        await this.page.locator(this.kisosk_webelements.Select_Event).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(process.env.Kiosk_Premium).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(process.env.Kiosk_Select).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(process.env.Kiosk_AbsenteeBidder).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.kisosk_webelements.NextStep_Button).click()
        await this.page.locator(this.kisosk_webelements.Skip_Terminal).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.addVIN_webelements.EmailId).fill(process.env.Emailid)
        await this.page.locator(this.kisosk_webelements.UseEmailAddress).click()
        await this.page.locator(this.kisosk_webelements.UseAccount).click()
    }

     async KioskSignIn()
    {
        //Sign IN
        await this.page.locator(this.addVIN_webelements.Createbtn).click()

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

        const firstName = "Devendra"; // + randomFirstName
        const lastName = "Ind" + randomLastName;

        // Fill the form fields with the generated names
        await this.page.locator(this.addVIN_webelements.Firstname).fill(firstName);
        await this.page.locator(this.addVIN_webelements.Lastname).fill(lastName);
        await this.page.waitForTimeout(1000)        

        //Email
        function generateRandomString(length) 
        {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            let result = '';
            for (let i = 0; i < length; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return result;
        }
        const randomEmail = generateRandomString(Math.floor(Math.random() * (26-19)) + 5);
        
    
        this.emailid = randomEmail+"@yopmail.com";
        await this.page.locator(this.addVIN_webelements.Email).click()
        await this.page.locator(this.addVIN_webelements.Email).fill(this.emailid)

//Password
        // await this.page.locator(this.addVIN_webelements.Password).fill(process.env.Password)
        // await this.page.locator(this.addVIN_webelements.ConfirmPassword).fill(process.env.ConfirmPassword)
        const password = this.page.locator(this.addVIN_webelements.Password);

        try {
                await password.waitFor({ timeout: 5000 });
                await password.fill(process.env.Password);
                //await this.page.locator(this.addVIN_webelements.Password).fill(process.env.Password);
                await this.page.locator(this.addVIN_webelements.ConfirmPassword).fill(process.env.ConfirmPassword);
            } 
        catch (error) 
            {
                console.error('Error while filling password fields:', error);
            }

        await this.page.locator(this.addVIN_webelements.Checkbox_Agree).click()
        await this.page.waitForTimeout(5000)
        await this.page.screenshot({ path: './ScreenShot/1 CreateAccount.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.CreateAccountbtn).click({timeout:90000})
        await this.page.waitForTimeout(10000)
    }

    async KioskForgotPassword()
    {
        await this.page.waitForTimeout(2000)
        //await this.page.setViewportSize({ width: 1920, height: 1080 });
        await this.page.screenshot({ path: './ScreenShot/3 PleaseLoginScreen.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.LoginButton_Header).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.addVIN_webelements.ForgotPassword).click()
        await this.page.screenshot({ path: './ScreenShot/4 ForgotPasswordScreen.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.ResetEmail).click()
        await this.page.waitForTimeout(8000)
    }

    async KioskConfirm()
    {
        const context = this.page.context();
        const page1 = await context.newPage();
        await page1.goto(process.env.Yopmail);
        await page1.locator(this.addVIN_webelements.EnterEmail).fill(this.emailid,{timeout:90000})
        await page1.locator(this.addVIN_webelements.CheckInbox).click()
        const frame = await page1.frameLocator(this.addVIN_webelements.IframeYopmail)
        await this.page.screenshot({ path: './ScreenShot/2 Yopmail.png', fullPage: true})
        if(!frame) throw new Error('Iframe not found')
        await frame.locator(this.addVIN_webelements.ClickHere).click()

         const [newPage] = await Promise.all
             ([
                this.page.context().waitForEvent('page'),
            ]);
        await newPage.waitForLoadState('load');
        await this.page.waitForTimeout(8000)
                try {
                await newPage.locator(this.addVIN_webelements.Password).fill(process.env.Password);
                await newPage.locator(this.addVIN_webelements.ConfirmPassword).fill(process.env.ConfirmPassword);
                await newPage.locator(this.addVIN_webelements.MemberEnterEmail).fill(this.emailid, { timeout: 90000 });
                await this.page.waitForTimeout(5000);
                await newPage.locator(this.addVIN_webelements.ResetPassword).click();
                await this.page.waitForTimeout(10000);

            } catch (error) 
            {
                console.error("Error occurred while resetting password:", error);
                throw error; // rethrow if you want the test to fail
            }
                await newPage.close();
                await this.page.waitForTimeout(4000)
                await page1.close();
    }
    async KioskLoginIn ()
    {
        await this.page.waitForTimeout(2000)
        //await this.page.setViewportSize({ width: 1920, height: 1080 });
        await this.page.screenshot({ path: './ScreenShot/3 PleaseLoginScreen.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.LoginButton_Header).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.addVIN_webelements.Password).fill(process.env.Password);
        await this.page.locator(this.addVIN_webelements.Loginbutton).click()
        await this.page.waitForTimeout(5000)
    }
    async SelectPremiumPackage()
    {
        await this.page.locator(this.kisosk_webelements.Select_PrimiumPackage).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.kisosk_webelements.Next_Button).click()
        await this.page.waitForTimeout(5000)
    }
    async BidderRegister()
    {
        await this.page.locator(this.kisosk_webelements.TakePhoto_Button).click()
        await this.page.locator(this.kisosk_webelements.Capture_Photo).click()
        await this.page.waitForTimeout(2000)
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
    
            const firstName = "Devendra"//" + randomFirstName;
            const lastName = "Ind" + randomLastName;
    
            // Fill the form fields with the generated names
            await this.page.locator(this.addVIN_webelements.Firstname).fill(firstName);
            await this.page.locator(this.addVIN_webelements.Middlename).fill(this.testdata.MiddleName);
            await this.page.locator(this.addVIN_webelements.Lastname).fill(lastName);
            await this.page.locator(this.kisosk_webelements.DriverLicense).fill(this.testdata.DriverLicense);
            await this.page.locator(this.kisosk_webelements.State).click()
            await this.page.locator(this.addVIN_webelements.Search_make).fill(this.testdata.LicState)
            await this.page.waitForTimeout(1000);
            await this.page.locator(this.addVIN_webelements.Select_FirstOption).click()
            await this.page.locator(this.kisosk_webelements.ExpirationDate).click()
            await this.page.waitForTimeout(500);
            await this.page.locator(this.bidderindividual_webelements.ChangeMonth).click()
            await this.page.locator(this.bidderindividual_webelements.SelectDecember).click()
            await this.page.locator(this.bidderindividual_webelements.SelectDate).click()
            await this.page.locator(this.kisosk_webelements.DateOfBirth).click()
            await this.page.waitForTimeout(500);
            await this.page.locator(this.bidderindividual_webelements.ChangeMonth).click()
            await this.page.locator(this.bidderindividual_webelements.SelectDecember).click()
            await this.page.waitForTimeout(1000);
            await this.page.locator(this.kisosk_webelements.ChangeYear).click()
            await this.page.waitForTimeout(500);
            await this.page.locator(this.addVIN_webelements.Search_make).fill(this.testdata.DateOfBirthYear)
            await this.page.waitForTimeout(1000);
            await this.page.locator(this.addVIN_webelements.Select_FirstOption).click()
            await this.page.locator(this.bidderindividual_webelements.SelectDate).click()
            // await this.page.locator(this.kisosk_webelements.Year2007).click()
            // await this.page.locator(this.bidderindividual_webelements.SelectDate).click()
            await this.page.locator(this.bidderindividual_webelements.MobileNumber_Field).fill(this.testdata.MobileNum);
            await this.page.screenshot({ path: './ScreenShot/50 BidderPersonalDetailsWithDriverLicence.png', fullPage: true})
            await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()

        //Email
        const EmailAddress = this.page.locator(this.kisosk_webelements.EmailAddress);
        try
        {
            await EmailAddress.waitFor({ timeout: 5000 });
            await EmailAddress.click();
            function generateRandomString(length) 
            {
                const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                let result = '';
                for (let i = 0; i < length; i++) {
                    result += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                return result;
            }
            const randomEmail = generateRandomString(Math.floor(Math.random() * (26-19)) + 5);
            
        
            this.emailid = randomEmail+"@yopmail.com";
            //await this.page.locator(this.kisosk_webelements.EmailAddress).click()
            await this.page.locator(this.kisosk_webelements.EmailAddress).fill(this.emailid)
            await this.page.waitForTimeout(1000);
            await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
        }
        catch (error) 
        {
            console.error(" Error while entering email and submitting:", error);
        }
        // await this.page.locator(this.kisosk_webelements.EmailAddress).click();
     
    }
    async WithExistingDetailPrePopulate()
    {
        await this.page.waitForTimeout(8000);
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
    }
    async AdditionalDocument()
    {
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.kisosk_webelements.TakePhoto_Button).click()
        await this.page.locator(this.kisosk_webelements.Capture_Photo).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.kisosk_webelements.TakePhoto2_Button).click()
        await this.page.locator(this.kisosk_webelements.Capture_Photo).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.kisosk_webelements.ExpirationDate).click()
        await this.page.waitForTimeout(500);
        await this.page.locator(this.bidderindividual_webelements.ChangeMonth).click()
        await this.page.locator(this.bidderindividual_webelements.SelectDecember).click()
        await this.page.locator(this.bidderindividual_webelements.SelectDate).click()
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
    }
    async Logout()
    {
        await this.page.locator(this.kisosk_webelements.Logout).click()
        await this.page.locator(this.addVIN_webelements.Acceptpopup).click({timeout:60000})
        await this.page.waitForTimeout(4000)
    }
    async CreateNewRegistration()
    {
        await this.page.locator(this.kisosk_webelements.CreateNewRegistration).click()
        await this.page.locator(this.addVIN_webelements.Acceptpopup).click({timeout:60000})
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.kisosk_webelements.SkipEmail).click()
        await this.page.waitForTimeout(2000)
    }
    async SelectPackage()
    {
        await this.page.locator(this.kisosk_webelements.Select_SelectPackage).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.kisosk_webelements.Next_Button).click()
        await this.page.waitForTimeout(5000)
    }
    async BusinessDocument()
    {
        await this.page.locator(this.kisosk_webelements.TakePhoto_Button).click()
        await this.page.locator(this.kisosk_webelements.Capture_Photo).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
    }
    async AbsenteePackage()
    {
        await this.page.locator(this.kisosk_webelements.Select_AbsenteePackage).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.kisosk_webelements.Next_Button).click()
        await this.page.waitForTimeout(5000)
    }

    async DealerDocument()
    {
        await this.page.locator(this.kisosk_webelements.TakePhoto_Button).click()
        await this.page.locator(this.kisosk_webelements.Capture_Photo).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.kisosk_webelements.ExpirationDate).click()
        await this.page.waitForTimeout(500);
        await this.page.locator(this.bidderindividual_webelements.ChangeMonth).click()
        await this.page.locator(this.bidderindividual_webelements.SelectDecember).click()
        await this.page.locator(this.bidderindividual_webelements.SelectDate).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.kisosk_webelements.TakePhoto2_Button).click()
        await this.page.locator(this.kisosk_webelements.Capture_Photo).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.kisosk_webelements.ReasaleExpirationDate).click()
        await this.page.waitForTimeout(500);
        await this.page.locator(this.bidderindividual_webelements.ChangeMonth).click()
        await this.page.locator(this.bidderindividual_webelements.SelectDecember).click()
        await this.page.locator(this.bidderindividual_webelements.SelectDate).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.kisosk_webelements.TakePhoto3_Button).click()
        await this.page.locator(this.kisosk_webelements.Capture_Photo).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.kisosk_webelements.TakePhoto4_Button).click()
        await this.page.locator(this.kisosk_webelements.Capture_Photo).click()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
    }
    async DisableKiosk()
    {
        // Assume you already have a browser context
        const newTab = await this.page.context().newPage();
        // Navigate to a URL in the new tab
        await newTab.goto(process.env.KisoskDisableURL);
        // Wait until the page fully loads
        await newTab.waitForLoadState('domcontentloaded');
        console.log('New tab opened with URL:', newTab.url());
        await this.page.waitForTimeout(4000)

    }

}