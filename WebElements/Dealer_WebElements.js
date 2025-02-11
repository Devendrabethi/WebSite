exports.Dealer_WebElements = 
class Dealer_WebElements
{
    constructor() 
    {
        this.VehicleTitle_Field = "//span[text()='How is the vehicle titled?']/../following-sibling::button"
        this.Dealer_Field = "//div[@data-key='Dealer']"
        this.VehicleTitleTo_Field = "//input[@name='vehicleTitledTo']"
        this.DealerNumber_Field = "//input[@name='dealerNumber']"
        this.DealerNumber = "//label[text()='Business phone number']/following-sibling::div[1]/input"
        this.DealerDoc = "//label[text()='Dealer License']/../../../following-sibling::div/div[2]/input[@type='file']"
        this.ResaleDoc = "//label[text()='Resale License']/../../../following-sibling::div/div[2]/input[@type='file']"
        this.OperatingAggrement = "//label[text()='Operating Agreement']/../../../following-sibling::div/div[2]/input[@type='file']"
        this.OperatingAggYES = "//span[text()='Are you named on the Operating Agreement?']/following-sibling::div/label[1]"
        this.DealerExpDateCalendar = "(//button[@aria-label='Calendar'])[1]"
        this.CurrentDate = "//div[contains(@aria-label,'Today')]"
        this.DealerLicenseState = "//label[text()='Dealer license state']/following-sibling::div[1]/input"
        this.SelectState = "//div[@data-key='Arizona']"
        this.ResaleLicenseState = "//label[text()='Tax ID state']/following-sibling::div[1]/input"
        this.TaxId = "//input[@name='taxId']"
        this.ResaleExpDateCalandar = "(//button[@aria-label='Calendar'])[2]"

    }
}
