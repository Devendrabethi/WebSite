exports.AddMedia_WebElements = 
class AddMedia_WebElements
{
    constructor() 
    {
        this.PhotoReq_Link = "//button[text()='View full photo requirements']"
        this.FrontPhoto = "//label[text()='Front 3/4 view']/../../../following-sibling::div/div[2]/input[@type='file']"//"(//input[@type='file'])[1]"
        this.UploadAllButton= "//button[text()='Cancel']/following-sibling::button"
        this.RarePhoto = "//label[text()='Rear 3/4 view']/../../../following-sibling::div/div[2]/input[@type='file']"//"(//input[@type='file'])[2]"
        this.SidePhoto = "//label[text()='Side view']/../../../following-sibling::div/div[2]/input[@type='file']"//"(//input[@type='file'])[3]"
        this.InteriorPhoto = "//label[text()='Interior view']/../../../following-sibling::div/div[2]/input[@type='file']"//"(//input[@type='file'])[4]"
        this.EnginePhoto = "//label[text()='Engine view']/../../../following-sibling::div/div[2]/input[@type='file']"//"(//input[@type='file'])[5]"
        this.VinPhoto = "//label[text()='VIN photo']/../../../following-sibling::div/div[2]/input[@type='file']"//"(//input[@type='file'])[6]"

        this.AdditionalPhotos = "//input[@type='file']"
        this.AdditionalPhotos2 = "(//input[@type='file'])[2]"
        this.AdditionalPhotos3 = "(//input[@type='file'])[3]"
    }
}