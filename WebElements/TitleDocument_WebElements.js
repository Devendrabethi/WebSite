exports.TitleDocument_WebElements = 
class TitleDocument_WebElements
{
    constructor() 
    {
        this.VehicleTitle_Field = "//span[text()='How is the vehicle titled?']/../following-sibling::button"
        this.Individual_Field = "//div[@data-key='Individual']"
        this.VehicleTitleTo_Field = "//input[@name='vehicleTitledTo']"
        this.FrontTitle = "//label[text()='Front of title']/../../../following-sibling::div/div[2]/input[@type='file']"
        this.BackTitle = "//label[text()='Back of title']/../../../following-sibling::div/div[2]/input[@type='file']"

        this.MiddleName = "//label[text()='Middle name']/following-sibling::div[1]/input"
        this.ContactNumber = "//label[text()='Contact number']/following-sibling::div[1]/input"

        this.CheckboxforAllAddress = "//label[text()='Use this address for all']"
        this.AddressSearch_Related = "//label[text()='Address search']/following-sibling::div[1]/input"
        this.AddressSearch = "//input[@aria-label='Address search']"
        this.SelectAddress = "(//div[contains(@data-key, 'address.')])[1]"
        this.CountydDropdown = "//label[text()='County']/following-sibling::div/button"

        this.MiddleName_Merchandise = "//label[text()='Middle Name']/following-sibling::div[1]/input"
        this.PhoneNumber_Merchandise = "//label[text()='Phone Number']/following-sibling::div[1]/input"
        this.CountyDropdown_Merchandise = "//span[text()='County']/parent::div/following-sibling::button"
    }
}
