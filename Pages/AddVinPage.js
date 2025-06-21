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
    }
    async ConsignmentURL()
    {
        await this.page.setViewportSize({ width: 1920, height: 950 })
        await this.page.goto(this.testdata.URL)
        await this.page.locator(this.addVIN_webelements.Acceptpopup).click()
    }
    async SignIn()
    {
        //Sign IN
       // await this.page.locator(this.addVIN_webelements.SignInbtn).click()
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
        
    
        const emailid = randomEmail+"@yopmail.com";
        await this.page.locator(this.addVIN_webelements.Email).click()
        await this.page.locator(this.addVIN_webelements.Email).fill(emailid)

        //Password
        await this.page.locator(this.addVIN_webelements.Password).fill(this.testdata.Password)
        await this.page.locator(this.addVIN_webelements.ConfirmPassword).fill(this.testdata.ConfirmPassword)
        await this.page.locator(this.addVIN_webelements.Checkbox_Agree).click()
        await this.page.locator(this.addVIN_webelements.CreateAccountbtn).click()
        await this.page.waitForTimeout(2000)
    }
    async ExistingAccount()
    {
       // await this.page.locator(this.addVIN_webelements.SignInbtn).click()
        await this.page.locator(this.addVIN_webelements.EmailId).fill(this.testdata.Emailid)
        await this.page.locator(this.addVIN_webelements.LoginPassword).fill(this.testdata.LoginPassword)
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
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()

        await this.page.locator(this.addVIN_webelements.Make_DropDown).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.addVIN_webelements.Make_DropDown).click()
        await this.page.locator(this.addVIN_webelements.Year_Field).fill(this.testdata.Year)
        await this.page.locator(this.addVIN_webelements.Make_Field).fill(this.testdata.Audi)
        await this.page.locator(this.addVIN_webelements.Select_Make).click()
        await this.page.locator(this.addVIN_webelements.Model_Field).click()
        await this.page.locator(this.addVIN_webelements.Select_Model).click()
        //await this.page.locator(this.addVIN_webelements.Trim_Field).fill(this.testdata.Trim)
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
        // await this.page.locator(this.addVIN_webelements.PowerSource_Field).click()
        // await this.page.locator(this.addVIN_webelements.Select_PowerSourceHybrid).click()
        // await this.page.locator(this.addVIN_webelements.Engine).fill(this.testdata.Engine)
        // await this.page.locator(this.addVIN_webelements.Cylinder_Field).click()
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
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()

    }
    async PowerSourceElectric()
    {
        await this.page.locator(this.addVIN_webelements.PowerSource_Field).click()
        await this.page.locator(this.addVIN_webelements.Select_PowerSourceElectric).click()
        await this.page.locator(this.addVIN_webelements.Engine).fill(this.testdata.Engine)
        await this.page.locator(this.addVIN_webelements.OriginalBaterryCapacity).fill(this.testdata.BatteryCapacityValue)
        // await this.page.locator(this.addVIN_webelements.PowerSource_Field).click()
        // await this.page.locator(this.addVIN_webelements.Select_PowerSourceHybrid).click()
        // await this.page.locator(this.addVIN_webelements.Engine).fill(this.testdata.Engine)
        // await this.page.locator(this.addVIN_webelements.Cylinder_Field).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.addVIN_webelements.OriginalBaterryCapacity).fill(this.testdata.BatteryCapacityValue)
        // await this.page.locator(this.addVIN_webelements.Plugin_Field).click()
        // await this.page.waitForTimeout(1000)
        // await this.page.locator(this.addVIN_webelements.SelectPlugin).click()
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
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
    }
    async VehicleDescp ()
    {
        await this.page.locator(this.addVIN_webelements.Odometer_Field).fill(this.testdata.Odometer)
        await this.page.locator(this.addVIN_webelements.ShortDesc).fill(this.testdata.ShortDescription)
        await this.page.locator(this.addVIN_webelements.LongDesc).fill(this.testdata.LongDescription)
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
    }
}