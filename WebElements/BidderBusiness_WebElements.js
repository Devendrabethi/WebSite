exports.BidderBusiness_WebElements = 
class BidderBusiness_WebElements
{
    constructor() 
    {
        this.SelectBusinessBox = "//input[@value='business']/../parent::label"
        this.BusinessName = "//input[@name='businessName']"
        this.BusinessPhoneNum_Field = "//input[@name='businessPhoneNumber']"
        this.Ein_Field = "//input[@name='ein']"
        this.RelationshipBusiness = "//span[text()='Relationship to business']/../following-sibling::button"
        this.SelectOwner = "//div[@data-key='313']"

        this.DesiredBidLimit_Field = "//label[text()='Desired bid limit']/following-sibling::div/input"
        this.FinancingBox = "//input[@value='financing']/../parent::label"
        this.Nextbtn = "//span[text()='Next']/parent::button"
        this.SelectRadiobtn = "(//input[@name='applyWoodsideCredit'])[1]/../parent::label"
        this.SubmitFinancing = "//button[text()='Submit']"

        this.BusinessDoc = "//label[text()='Business license']/../../../following-sibling::div/div[2]/input[@type='file']"

    }
}
