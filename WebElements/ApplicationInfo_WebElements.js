exports.ApplicationInfo_WebElements = 
class ApplicationInfo_WebElements
{
    constructor() 
    {
        this.VehicleWorth_Field = "//label[text()='What do you estimate this vehicle to be worth?']/following-sibling::div[1]/input"
        this.ReserveType_Dropdown = "//span[text()='Reserve type']/../following-sibling::button"
        this.Reserve = "//span[text()='Reserve']/parent::div"
        this.ConsignmentSpecialist = "//span[text()='Are you currently working with a consignment specialist?']/../following-sibling::button"
       // this.Select_ConsignmentSpecialist = "//label[text()='Front of title']/../../../following-sibling::div/div[2]/input[@type='file']"
        this.AnothweAuction = "//span[text()='Would you consider consigning at another one of our auctions?']/../following-sibling::button"
        this.SelectYes = "//span[text()='Yes']/parent::div"

        this.SignatureName = "//input[@name='name']"
        this.Calendar = "//button[@aria-label='Calendar']"
        this.CurrentDate = "//div[contains(@aria-label,'Today')]"
        this.SubmitApplicaion = "//span[text()='Submit application']/parent::button"
    }
}
