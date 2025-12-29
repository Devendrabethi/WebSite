exports.Merchandise_WebElements = 
class Merchandise_WebElements
{
    constructor() 
    {
        this.Add_new_merchandise = "//button[text()='Add new merchandise']"
        this.Describe_Item1 = "//label[text()='Describe your item']/parent::div/following-sibling::div[1]/input"
        this.Describe_Item2 = "(//label[text()='Describe your item']/parent::div)[2]/following-sibling::div[1]/input"
        this.Describe_Item3 = "(//label[text()='Describe your item']/parent::div)[3]/following-sibling::div[1]/input"
        this.Estimate_Value1 = "//label[text()='Estimated value']/following-sibling::div[1]/input"
        this.Estimate_Value2 = "(//label[text()='Estimated value'])[2]/following-sibling::div[1]/input"
        this.Estimate_Value3 = "(//label[text()='Estimated value'])[3]/following-sibling::div[1]/input"
        this.Addtional_Details1 = "//label[text()='Additional details']/parent::div/following-sibling::div[1]/textarea"
        this.Addtional_Details2 = "(//label[text()='Additional details']/parent::div)[2]/following-sibling::div[1]/textarea"
        this.Addtional_Details3 = "(//label[text()='Additional details']/parent::div)[3]/following-sibling::div[1]/textarea"
        this.Add_Another_Item = "//span[text()='Add another item']"
        this.Next_Button = "//span[text()='Next']/parent::button"

        this.SignatureName_Merchandise = "//input[@name='signatureName']"
        this.Calendar = "//button[@aria-label='Calendar']"
        this.CurrentDate = "//div[contains(@aria-label,'Today')]"
        this.SubmitApplicaion = "//span[text()='Submit application']/parent::button"

        this.Start_Another_Application = "//span[text()='Start another application']"

    }
}
