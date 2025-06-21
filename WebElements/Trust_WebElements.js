exports.Trust_WebElements = 
class Trust_WebElements
{
    constructor() 
    {
        this.VehicleTitle_Field = "//span[text()='How is the vehicle titled?']/../following-sibling::button"
        this.Trust_Field = "//div[@data-key='Trust']"
        this.VehicleTitleTo_Field = "//input[@name='vehicleTitledTo']"
       
        this.TrustDoc = "//label[text()='Trust document']/../../../following-sibling::div/div[2]/input[@type='file']"

        this.ViewSubmission = "//span[text()='View my submission']/parent::a"
        this.Consignmentbutton = "//div[text()='Consignments']/parent::div"
        this.FormLibrary = "//span[text()='Form Library']/parent::a"
        this.Filterbutton = "//button[text()='Filter']"
        this.RemovePastEvent = "//span[text()='Event: Scottsdale Fall 2025']/../parent::button"
    }
}
