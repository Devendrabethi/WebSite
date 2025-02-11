exports.Business_WeElements = 
class Business_WeElements
{
    constructor() 
    {
        this.StartAnotherApplication = "//span[text()='Start another application']/parent::a"
        this.VehicleTitle_Field = "//span[text()='How is the vehicle titled?']/../following-sibling::button"
        this.Business_Field = "//div[@data-key='Business']"
        this.VehicleTitleTo_Field = "//input[@name='vehicleTitledTo']"
        this.Ein = "//input[@name='ein']"
        this.BusinessNumber = "//label[text()='Business phone number']/following-sibling::div[1]/input"
        this.OperatingAggrement = "//label[text()='Operating Agreement']/../../../following-sibling::div/div[2]/input[@type='file']"
        this.OperatingAggYES = "//span[text()='Are you named on the Operating Agreement?']/following-sibling::div/label[1]"


    }
}
