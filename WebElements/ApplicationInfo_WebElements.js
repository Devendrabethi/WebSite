exports.ApplicationInfo_WebElements = 
class ApplicationInfo_WebElements
{
    constructor() 
    {
        this.VehicleWorth_Field = "//label[text()='What do you estimate this vehicle to be worth?']/following-sibling::div[1]/input"
        this.ReserveType_Dropdown = "//span[text()='Reserve type']/../following-sibling::button"
        this.Reserve = "//span[text()='Reserve']/parent::div"
        this.ConsignmentSpecialist = "//span[text()='Are you currently working with a consignment specialist?']/../following-sibling::button"
        this.Select_ConsignmentSpecialist = "//div[@dir='ltr']/div/div[1]"
        this.AnothweAuction = "//span[text()='Would you consider consigning at another one of our auctions?']/../following-sibling::button"
        this.SelectYes = "//span[text()='Yes']/parent::div"

        this.SignatureName = "//input[@name='name']"
        this.Calendar = "//button[@aria-label='Calendar']"
        this.CurrentDate = "//div[contains(@aria-label,'Today')]"
        this.SubmitApplicaion = "//span[text()='Submit application']/parent::button"

        this.ViewSubmission = "//span[text()='View my submission']/parent::a"
        this.Consignmentbutton = "//div[text()='Consignments']/parent::div"
        this.FormLibrary = "//span[text()='Form Library']/parent::a"
        this.Filterbutton = "//button[text()='Filter']"
        this.RemovePastEvent = "//span[text()='Event: Scottsdale Fall 2025']/../parent::button"

        //Dashboard
        this.Consignmentbutton = "//div[text()='Consignments']/parent::div"
        this.SelectFirstVehicle = "(//div[contains(@class,'view')]/div[text()='View'])[1]"
        this.Modifield_Horsepower_Text = "//p[text()='Vehicle details']/parent::div/ul/li[17]"
        this.ShortDescription = "//div[@aria-label='Consignment details']/a[contains(@id,'description')][1]"
        this.LongDescription = "//div[@aria-label='Consignment details']/a[contains(@id,'long-description')]"
        this.MediaTab = "//div[@aria-label='Consignment details']/a[contains(@id,'media')]"
        this.UploadMedia_Button = "//button[text()='Upload media']"
        this.AdditionalPhotos = "//input[@type='file']"
        this.Upload_Button = "//button[text()='Upload']"
        this.UploadAll_Button = "//button[text()='Cancel']/following-sibling::button"
        this.DocumentTab = "//div[@aria-label='Consignment details']/a[contains(@id,'documents')]"
        this.IndividualDocumentSection = "//div[@aria-label='Consignment details']/a[contains(@id,'individual')]"
        this.FirstDocument = "(//p[text()='Choose document'])[1]"
        this.SecondDocument = "(//p[text()='Choose document'])[2]"
        this.ThirdDocument = "(//p[text()='Choose document'])[3]"
        this.BusinessDocumentSection = "//div[@aria-label='Consignment details']/a[contains(@id,'business')]"
        this.ApplicantInfoTab = "//div[@aria-label='Consignment details']/a[contains(@id,'applicant')]"
        this.Applicant_Address = "//div[@aria-label='Consignment details']/a[contains(@id,'addresses')]"
    }
}
