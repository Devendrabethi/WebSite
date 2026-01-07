exports.Kisosk_WebElements = 
class Kisosk_WebElements
{
    constructor() 
    {
        this.Select_SelfServiceMode = "//p[text()='Self-Service Mode']"
        this.NextStep_Button = "//span[text()='Next step']/parent::button"
        this.Select_Event = "//p[text()='Scottsdale 2026']/parent::label"
        this.Skip_Terminal = "//button[text()='Skip terminal setup']"
        this.Complete_Terminal = "//button[text()='Complete setup']"
        this.Select_PrimiumPackage = "//span[text()='Choose a package']/parent::span/following-sibling::div/label[1]"
        this.Select_SelectPackage = "//span[text()='Choose a package']/parent::span/following-sibling::div/label[2]"
        this.Select_AbsenteePackage = "//span[text()='Choose a package']/parent::span/following-sibling::div/label[3]"
        this.Next_Button = "//span[text()='Next']/parent::button"
        this.TakePhoto_Button = "(//button[text()='Take a photo'])[1]"
        this.Capture_Photo = "//button[@aria-label='Take photo']"

        this.DriverLicense = "//input[@name='driversLicense']"
        this.State = "(//span[text()='State']/parent::div/following-sibling::button)[1]"
        this.ExpirationDate = "(//button[@aria-label='Calendar'])[1]"
        this.ReasaleExpirationDate = "(//button[@aria-label='Calendar'])[2]"
        this.DateOfBirth = "(//button[@aria-label='Calendar'])[2]"
        this.ChangeYear = "//button[@aria-label='Year']"
        this.Year2007 = "//div[@data-key='100']"
        this.TakePhoto2_Button = "(//button[text()='Take a photo'])[1]"
        this.TakePhoto3_Button = "(//button[text()='Take a photo'])[1]"
        this.TakePhoto4_Button = "(//button[text()='Take a photo'])[1]"
        this.Logout = "//span[text()='Logout']/parent::button"

        this.Select_ManageMode = "//p[text()='Managed Mode']"
        this.Login_To_Account = "//span[text()='Log in to account']"
        this.SignIn_Button = "//button[text()='Sign in']"
        this.Continue_Button = "//button[text()='Continue']"
        this.UseEmailAddress = "//span[text()='Use Email Address']"
        this.UseAccount = "//button[text()='Use account']"
        this.SkipEmail = "//button[text()='Skip']"
        this.EmailAddress = "//input[@name='emailAddress']"
        this.CreateNewRegistration = "//span[text()='Create new registration']"
    }
}