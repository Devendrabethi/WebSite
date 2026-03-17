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
        this.Weight_value1 = "//label[text()='Weight']/following-sibling::div/input"
        this.Weight_value2 = "(//label[text()='Weight'])[2]/following-sibling::div/input"
        this.Weight_value3 = "(//label[text()='Weight'])[3]/following-sibling::div/input"
        this.Condition_Button1 = "//span[text()='Condition']/parent::div/following-sibling::button"
        this.Condition_Button2 = "(//span[text()='Condition'])[2]/parent::div/following-sibling::button"
        this.Condition_Button3 = "(//span[text()='Condition'])[3]/parent::div/following-sibling::button"
        this.Original ="//span[text()='Original']"
        this.Width_Value1 = "//label[text()='Width']/following-sibling::input"
        this.Width_Value2 = "(//label[text()='Width'])[2]/following-sibling::input"
        this.Width_Value3 = "(//label[text()='Width'])[3]/following-sibling::input"
        this.Height_Value1 = "//label[text()='Height']/following-sibling::input"
        this.Height_Value2 = "(//label[text()='Height'])[2]/following-sibling::input"
        this.Height_Value3 = "(//label[text()='Height'])[3]/following-sibling::input"
        this.Depth_Value1 = "//label[text()='Depth']/following-sibling::input"
        this.Depth_Value2 = "(//label[text()='Depth'])[2]/following-sibling::input"
        this.Depth_Value3 = "(//label[text()='Depth'])[3]/following-sibling::input"
        this.Addtional_Details1 = "//label[text()='Additional details']/parent::div/following-sibling::div[1]/textarea"
        this.Addtional_Details2 = "(//label[text()='Additional details']/parent::div)[2]/following-sibling::div[1]/textarea"
        this.Addtional_Details3 = "(//label[text()='Additional details']/parent::div)[3]/following-sibling::div[1]/textarea"
        this.Add_Another_Item = "//button[text()='Add another item']"
        this.Next_Button = "//span[text()='Next']/parent::button"

        this.SignatureName_Merchandise = "//input[@name='signatureName']"
        this.Calendar = "//button[@aria-label='Calendar']"
        this.CurrentDate = "//div[contains(@aria-label,'Today')]"
        this.SubmitApplicaion = "//button[text()='Submit application']"

        this.Start_Another_Application = "//a[text()='Start another application']"

    }
}
