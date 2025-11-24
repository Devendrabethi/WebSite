import { expect } from '@playwright/test'
import { AddVIN_WebElements } from '../WebElements/AddVIN_WebElements'    
import { TestData } from '../TestData/testdata.js';

exports.AddVinPage =
class AddVinPage
{
    constructor(page)
    {
        this.page = page
        this.addVIN_webelements =  new AddVIN_WebElements()
        this.testdata = new TestData()
        this.emailid = "";
    }

    async MarketingLogin ()
    {
        await this.page.setViewportSize({ width: 1920, height: 950 })
        await this.page.goto(process.env.MarkettingURL)
        await this.page.locator(this.addVIN_webelements.MarkingLoginButton).click()
        await this.page.locator(this.addVIN_webelements.Marketting_CreateAccount).click()
        
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
        
    
        const emailid = randomEmail+"@yopmail.com";
        await this.page.locator(this.addVIN_webelements.Email).click()
        await this.page.locator(this.addVIN_webelements.Email).fill(emailid)

        //Password
        await this.page.locator(this.addVIN_webelements.Password).fill(process.env.Password)
        await this.page.locator(this.addVIN_webelements.Marketting_ConfirmPassword).fill(process.env.ConfirmPassword)
        await this.page.locator(this.addVIN_webelements.Marketting_Checkbox_Agree).click()
        await this.page.screenshot({ path: './ScreenShot/CreateAccount.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Marketting_CreateAccountSignUp).click()
        await this.page.waitForTimeout(15000)

        await this.page.locator(this.addVIN_webelements.MarkingLoginButton).click()
        await this.page.locator(this.addVIN_webelements.Email).fill(emailid)
        await this.page.locator(this.addVIN_webelements.Password).fill(process.env.Password)
        await this.page.locator(this.addVIN_webelements.Marketting_LoginAfterCreate).click()
        await this.page.waitForTimeout(15000)
    }

    async ConsignmentURL()
    {
        //await this.page.setViewportSize({ width: 1920, height: 950 })
        await this.page.goto(process.env.URL)
        await this.page.locator(this.addVIN_webelements.Acceptpopup).click()
    }
    async SignIn()
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

        const firstName = "Dev" + randomFirstName;
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
        await this.page.locator(this.addVIN_webelements.Password).fill(process.env.Password)
        await this.page.locator(this.addVIN_webelements.ConfirmPassword).fill(process.env.ConfirmPassword)
        await this.page.locator(this.addVIN_webelements.Checkbox_Agree).click()
        await this.page.waitForTimeout(5000)
        await this.page.screenshot({ path: './ScreenShot/1 CreateAccount.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.CreateAccountbtn).click({timeout:90000})
        await this.page.waitForTimeout(10000)
    }
    async ConfirmEmail()
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
        await newPage.close();
        await this.page.waitForTimeout(2000)
        await page1.close();
        //await this.page.bringToFront();
    }
    async LoginIn ()
    {
        await this.page.waitForTimeout(2000)
        //await this.page.setViewportSize({ width: 1920, height: 1080 });
        await this.page.screenshot({ path: './ScreenShot/3 PleaseLoginScreen.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.PleaseLogin_Button).click()
        await this.page.waitForTimeout(2000)
         await this.page.locator(this.addVIN_webelements.Loginbutton).click()
        await this.page.waitForTimeout(5000)
    }
    async Forgotpassword()
    {
        await this.page.waitForTimeout(2000)
        //await this.page.setViewportSize({ width: 1920, height: 1080 });
        await this.page.screenshot({ path: './ScreenShot/3 PleaseLoginScreen.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.PleaseLogin_Button).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.addVIN_webelements.ForgotPassword).click()
        await this.page.screenshot({ path: './ScreenShot/4 ForgotPasswordScreen.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.ResetEmail).click()
        await this.page.waitForTimeout(8000)
        //await page1.bringToFront();
        const context = this.page.context();
        const page1 = await context.newPage();
        await page1.goto(process.env.Yopmail);
        await page1.locator(this.addVIN_webelements.EnterEmail).clear()
        await page1.locator(this.addVIN_webelements.EnterEmail).fill(this.emailid,{timeout:90000})
        await page1.locator(this.addVIN_webelements.CheckInbox).click()
        const frame = await page1.frameLocator(this.addVIN_webelements.IframeYopmail)
        if(!frame) throw new Error('Iframe not found')
        //await frame.locator(this.addVIN_webelements.ClickHere).click()
        await this.page.waitForTimeout(5000)
         const [newPage] = await Promise.all
             ([
                this.page.context().waitForEvent('page'),
                 await frame.locator(this.addVIN_webelements.ClickHere).click()
            ]);
        await newPage.waitForLoadState('load');
        await newPage.locator(this.addVIN_webelements.MemberEnterEmail).fill(this.emailid,{timeout:90000})
        await this.page.waitForTimeout(5000)
        await newPage.locator(this.addVIN_webelements.Password).fill(process.env.Password)
        await newPage.locator(this.addVIN_webelements.ConfirmPassword).fill(process.env.ConfirmPassword)
        await newPage.locator(this.addVIN_webelements.ResetPassword).click()
        await this.page.waitForTimeout(10000)
        await newPage.close();
        await this.page.waitForTimeout(2000)
        await page1.close();
        await this.page.waitForTimeout(2000)
        await this.page.setViewportSize({ width: 1920, height: 1080 });
        //await this.page.bringToFront();
        await this.page.locator(this.addVIN_webelements.Loginbutton).click()
        await this.page.waitForTimeout(8000)
        await this.page.screenshot({ path: './ScreenShot/5 Logged In.png', fullPage: true})
        await this.page.waitForTimeout(1000)
    }
    async LogOut ()
    {
        await this.page.locator(this.addVIN_webelements.Logout).click()
        await this.page.waitForTimeout(5000)
        await this.page.screenshot({ path: './ScreenShot/5.1 Logout Screen.png', fullPage: true})
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.addVIN_webelements.LogoutButton).click()
        await this.page.waitForTimeout(1000)
        await this.page.screenshot({ path: './ScreenShot/5.2 Home Screen Screen.png', fullPage: true})
    }
    async ExistingAccount()
    {
       // await this.page.locator(this.addVIN_webelements.SignInbtn).click()
        await this.page.locator(this.addVIN_webelements.EmailId).fill(process.env.Emailid)
        await this.page.locator(this.addVIN_webelements.LoginPassword).fill(process.env.LoginPassword)
        await this.page.screenshot({ path: './ScreenShot/1.1 LoginAccount.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Loginbutton).click()
        await this.page.waitForTimeout(2000)
    }
    async VehicleDetailsone()
    {
        //VIN
        function generateRandomString(length) 
        {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            let result = '';
            for (let i = 0; i < length; i++) 
                {
                    result += chars.charAt(Math.floor(Math.random() * chars.length));
                }
            return result;
        }
        const randomVin = generateRandomString(Math.floor(Math.random() * (36-34)) + 15);
        const VinNumber =randomVin;
        await this.page.locator(this.addVIN_webelements.Vin_Field).click()
        await this.page.locator(this.addVIN_webelements.Vin_Field).fill(VinNumber)
        await expect(this.page.locator(this.addVIN_webelements.Nextbtn_Submit)).toBeVisible()
        await this.page.screenshot({ path: './ScreenShot/7 VinPage.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()

        await this.page.locator(this.addVIN_webelements.Make_DropDown).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.addVIN_webelements.Make_DropDown).click()

        const randomYear = this.testdata.vehicleYears[ Math.floor(Math.random() * this.testdata.vehicleYears.length)]
        await this.page.fill(this.addVIN_webelements.Year_Field, randomYear);

       // await this.page.locator(this.addVIN_webelements.Year_Field).fill(this.testdata.Year)

        const randomVehicle = this.testdata.vehicleMakes[ Math.floor(Math.random() * this.testdata.vehicleMakes.length)]
        await this.page.fill(this.addVIN_webelements.Make_Field, randomVehicle);

       // await this.page.locator(this.addVIN_webelements.Make_Field).fill(this.testdata.Audi)
        await this.page.locator(this.addVIN_webelements.Select_Make).click()
        await this.page.locator(this.addVIN_webelements.Model_Field).click()
        await this.page.locator(this.addVIN_webelements.Select_Model).click()
        await this.page.locator(this.addVIN_webelements.Style_Field).fill(this.testdata.Style)
    }
    async PowerSource()
    {
        await this.page.locator(this.addVIN_webelements.PowerSource_Field).click()
        await this.page.locator(this.addVIN_webelements.Select_PowerSource).click()
    }
    async PowerSourceHyBrid()
    {
        await this.page.locator(this.addVIN_webelements.PowerSource_Field).click()
        await this.page.locator(this.addVIN_webelements.Select_PowerSourceHybrid).click()
        await this.page.locator(this.addVIN_webelements.Engine).fill(this.testdata.Engine)
        await this.page.locator(this.addVIN_webelements.Cylinder_Field).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.addVIN_webelements.Cylinder_4Value).click()
        await this.page.locator(this.addVIN_webelements.OriginalBaterryCapacity).fill(this.testdata.BatteryCapacityValue)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.addVIN_webelements.OriginalBaterryCapacity).fill(this.testdata.BatteryCapacityValue)
        await this.page.locator(this.addVIN_webelements.Plugin_Field).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.addVIN_webelements.SelectPlugin).click()
        await this.page.locator(this.addVIN_webelements.ChargingType).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.addVIN_webelements.SelectChargingType).click()
        await this.page.locator(this.addVIN_webelements.TransmissionType_Field).click()
        await this.page.locator(this.addVIN_webelements.TransmissionType_AutomaticWithManual).click()
        await this.page.locator(this.addVIN_webelements.TransmissionSpeed_Field).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.addVIN_webelements.TransmissionSpeed_4speedValue).click()
        await this.page.locator(this.addVIN_webelements.ExteriorColor_Field).fill(this.testdata.Exterior_Color)
        await this.page.locator(this.addVIN_webelements.InteriorColor_Field).fill(this.testdata.Interior_Color)
        await this.page.locator(this.addVIN_webelements.Checkbox).click()
        await this.page.screenshot({ path: './ScreenShot/8 VehicleDetailswithHybrid.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()

    }
    async PowerSourceElectric()
    {
        await this.page.locator(this.addVIN_webelements.PowerSource_Field).click()
        await this.page.locator(this.addVIN_webelements.Select_PowerSourceElectric).click()
        await this.page.locator(this.addVIN_webelements.Engine).fill(this.testdata.Engine)
        await this.page.locator(this.addVIN_webelements.OriginalBaterryCapacity).fill(this.testdata.BatteryCapacityValue)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.addVIN_webelements.OriginalBaterryCapacity).fill(this.testdata.BatteryCapacityValue)
        await this.page.locator(this.addVIN_webelements.ChargingType).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.addVIN_webelements.SelectChargingType).click()
        await this.page.locator(this.addVIN_webelements.NoOfMotors).fill(this.testdata.NumofMotors)
        await this.page.locator(this.addVIN_webelements.TransmissionType_Field).click()
        await this.page.locator(this.addVIN_webelements.TransmissionType_Manual).click()
        await this.page.locator(this.addVIN_webelements.TransmissionSpeed_Field).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.addVIN_webelements.TransmissionSpeed_4speedValue).click()
        await this.page.locator(this.addVIN_webelements.ExteriorColor_Field).fill(this.testdata.Exterior_Color)
        await this.page.locator(this.addVIN_webelements.InteriorColor_Field).fill(this.testdata.Interior_Color)
        await this.page.locator(this.addVIN_webelements.Checkbox).click()
        await this.page.screenshot({ path: './ScreenShot/8.1 VehicleDetailswithEletric.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
    }
    async PowerSourceDiesel()
    {
        await this.page.locator(this.addVIN_webelements.PowerSource_Field).click()
        await this.page.locator(this.addVIN_webelements.Select_PowerSourceDiesel).click()
        await this.page.locator(this.addVIN_webelements.Engine).fill(this.testdata.Engine)
        await this.page.locator(this.addVIN_webelements.Cylinder_Field).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.addVIN_webelements.Cylinder_4Value).click()
        await this.page.locator(this.addVIN_webelements.ExteriorColor_Field).fill(this.testdata.Exterior_Color)
        await this.page.locator(this.addVIN_webelements.InteriorColor_Field).fill(this.testdata.Interior_Color)
        await this.page.screenshot({ path: './ScreenShot/8.2 VehicleDetailswithDiesel.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Checkbox).click()
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
    }
    async VehicleDetailstwo()
    {
        await this.page.locator(this.addVIN_webelements.Engine).fill(this.testdata.Engine)
        await this.page.locator(this.addVIN_webelements.Cylinder_Field).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.addVIN_webelements.Cylinder_4Value).click()
        await this.page.locator(this.addVIN_webelements.TransmissionType_Field).click()
        await this.page.locator(this.addVIN_webelements.TransmissionType_Automatic).click()
        await this.page.locator(this.addVIN_webelements.TransmissionSpeed_Field).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.addVIN_webelements.TransmissionSpeed_4speedValue).click()
        await this.page.locator(this.addVIN_webelements.ExteriorColor_Field).fill(this.testdata.Exterior_Color)
        await this.page.locator(this.addVIN_webelements.InteriorColor_Field).fill(this.testdata.Interior_Color)
        await this.page.locator(this.addVIN_webelements.Checkbox).click()
        await this.page.screenshot({ path: './ScreenShot/8.3 VehicleDetailswithGasoline.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
    }
    async Mileage()
    {
    //    await this.page.locator(this.addVIN_webelements.Odometer_Field).click()
    //    await this.page.locator(this.addVIN_webelements.Odometer_Field).fill(this.testdata.Odometer)
        await this.page.locator(this.addVIN_webelements.Condition_Vehicle_Field).click()
        await this.page.locator(this.addVIN_webelements.Select_RestoredOriginal).click()
        await this.page.locator(this.addVIN_webelements.OriginalEngine_Field).click()
        await this.page.locator(this.addVIN_webelements.modifiedHorsePower_Field).click()
        await this.page.waitForTimeout(1000)
        await this.page.screenshot({ path: './ScreenShot/9 VehicleCondition.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
    }
    async VehicleDescp ()
    {
        await this.page.locator(this.addVIN_webelements.Odometer_Field).fill(this.testdata.Odometer)
        await this.page.locator(this.addVIN_webelements.ShortDesc).fill(this.testdata.ShortDescription)
        await this.page.locator(this.addVIN_webelements.LongDesc).fill(this.testdata.LongDescription)
        await this.page.waitForTimeout(5000)
        await this.page.screenshot({ path: './ScreenShot/10 VehicleDescription.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
    }
}