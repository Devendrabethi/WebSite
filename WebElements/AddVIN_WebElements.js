exports.AddVIN_WebElements = 
class AddVIN_WebElements
{
    constructor() 
    {

        this.MarkingLoginButton = "(//button[text()='Log In'])[2]"
        this.Marketting_CreateAccount = "(//button[contains(text(),'Create account')])[1]"
        this.Marketting_ConfirmPassword = "//input[@name='passwordConfirmation']"
        this.Marketting_Checkbox_Agree = "//input[@name='termsAndPrivacyPolice']"
        this.Marketting_CreateAccountSignUp = "(//button[contains(text(),'Create account')])[2]"
        this.Marketting_LoginAfterCreate = "(//button[text()='Log In'])[3]"


        this.Acceptpopup = "//button[@data-tid='banner-accept']"
        this.SignInbtn = "//span[text()='Sign In']/parent::button"
        this.Createbtn = "//span[contains(text(),'Create')]/parent::button"
        this.Firstname =  "//input[@name='firstName']"
        this.Lastname =   "//input[@name='lastName']"
        this.Middlename = "//input[@name='middleName']"
        this.Email =      "//input[@name='email']"
        this.Password = "//input[@name='password']"
        this.ConfirmPassword = "//input[@name='confirmPassword']"
        this.Checkbox_Agree = "//input[@name='agreeToTerms']/../parent::label"
        this.CreateAccountbtn = "//span[text()='Create account']/parent::button"


        this.EmailId = "//input[@name='email']"
        this.LoginPassword = "//input[@name='password']"
        this. Loginbutton = "(//span[text()='Log in'])[2]"

        this.Logout = "//button[@aria-label='Log Out']"
        this.LogoutButton = "//button[text()='Logout']"

        this.EnterEmail = "//input[@placeholder='Enter your inbox here']"
        this.CheckInbox = "//button[@title='Check Inbox @yopmail.com']"
        this.IframeYopmail = "//iframe[@name='ifmail']"
        this.RefreshForInbox = "//button[@id='refresh']"
        this.ClickHere = "//a[text()='Click here']"
        this.MemberEnterEmail = "//input[@placeholder='your-email@email.com']"
        this.ResetPassword = "//span[text()='Reset password']"
        this.PleaseLogin_Button = "//button[text()='please log in here']"
        this.ForgotPassword = "//button[text()='Forgot password?']"
        this.ResetEmail = "//span[text()='Send password reset email']"


        this.Vin_Field = "//input[@aria-label='Enter VIN']"
        this.Nextbtn_Submit = "//button[@type='submit']"
        this.Year_Field = "//label[text()='Year']/following-sibling::div[1]/input"
        this.Make_DropDown = "//button[@aria-label='Show suggestions']"
        this.Make_Field = "//label[text()='Make']/following-sibling::div[1]/input"
        this.Select_Make = "//div[@aria-label='Suggestions']/div[1]"
        this.Model_Field = "//label[text()='Model']/following-sibling::div[1]/input"
        this.Select_Model = "(//div[@aria-label='Suggestions']/div)[1]"
        this.Trim_Field = "//input[@name='trimLevel']"
        this.Style_Field = "//input[@name='style']"
        this.PowerSource_Field = "//span[text()='Power source']/parent::div/following-sibling::button"
        this.Select_PowerSource = "//div[@data-key='694020000']"

        this.Select_PowerSourceHybrid = "//div[@data-key='694020002']"
        this.OriginalBaterryCapacity = "//p[text()='kWh']/preceding-sibling::input"
        this.Plugin_Field = "//span[text()='Plugin or Standard Hybrid?']/parent::div/following-sibling::button"
        this.SelectPlugin = "//div[@data-key='694020000']"
        this.ChargingType = "//span[text()='Supported charging types']/parent::div/following-sibling::button"
        this.SelectChargingType = "//div[@data-key='694020002']"

        this.Select_PowerSourceElectric = "//div[@data-key='694020003']"
        this.NoOfMotors = "//label[text()='Number of motors']/following-sibling::div[1]/input"

        this.Select_PowerSourceDiesel = "//div[@data-key='694020001']"



        this.Engine = "//input[@name='engine']"
        this.Cylinder_Field = "//span[text()='Cylinders']/parent::div/following-sibling::button"
        this.Cylinder_4Value = "//div[@data-key='694020003']"
        this.TransmissionSpeed_Field = "//span[text()='Transmission speeds']/parent::div/following-sibling::button"
        this.TransmissionSpeed_4speedValue = "//div[@data-key='694020004']"
         this.TransmissionType_Field = "//span[text()='Transmission type']/parent::div/following-sibling::button"
        this.TransmissionType_Automatic = "//div[@data-key='284']"
        this.TransmissionType_AutomaticWithManual = "//div[@data-key='482']"
        this.TransmissionType_Manual = "//div[@data-key='8']"
        this.ExteriorColor_Field = "//input[@name='exteriorColor']"
        this.InteriorColor_Field = "//input[@name='interiorColor']"
        this.Checkbox = "//input[@name='thisInfoIsCorrect']/parent::span/following-sibling::div"

        this.Odometer_Field = "//label[text()='Odometer']/following-sibling::div[1]/input"
        this.Condition_Vehicle_Field = "//span[text()='What is the condition of your vehicle?']/parent::div/following-sibling::button"
        this.Select_RestoredOriginal = "//div[@data-key='49']"
        this.OriginalEngine_Field = "//input[@name='originalEngine']/parent::span/following-sibling::div[text()='Yes']"
        this.modifiedHorsePower_Field = "//input[@name='modifiedHorsePower']/parent::span/following-sibling::div[text()='Yes']"

        this.ShortDesc = "//textarea[@name='shortDescriptionText']"
        this.LongDesc = "//textarea[@name='longDescription']"

        this.NextButton_AdditionalPhoto = "//button[@type='submit']"

    }
}
