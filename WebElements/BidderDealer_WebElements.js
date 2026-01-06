exports.BidderDealer_WebElements = 
class BidderDealer_WebElements
{
    constructor() 
    {
        this.SelectDealerBox = "//input[@value='dealer']/../parent::label"
        this.DealerName = "//input[@name='businessName']"
        this.DealerePhoneNum_Field = "//input[@name='businessPhoneNumber']"
        this.DealerLicense_Field = "//input[@name='dealerLicenseNumber']"
        this.TaxID_Field = "//input[@name='taxId']"
        this.RelationshipDealer = "//span[text()='Relationship to dealer']/../following-sibling::button"
        this.SelectRepresentative = "//div[@data-key='312']"
        this.DealerState_Field = "//span[text()='State']/parent::div/following-sibling::button"
        this.SearchDealerState = "//input[@aria-label='Search']"
        this.Select_FirstOption = "//input[@aria-label='Search']/parent::div/following-sibling::div[1]/div[1]"
        this.DesiredBidLimit_Field = "//label[text()='Desired bid limit']/following-sibling::div/input"
        this.PersonalCheckBox = "//input[@value='personalCheck']/../parent::label"
        this.CreditCardHoldBox = "//input[@value='creditCardHold']/../parent::label"
        this.PersonalCheckBankLGranteeDoc = "//label[text()='Bank letter of guarantee']/../../../following-sibling::div/div[2]/input[@type='file']"
        this.Nextbtn = "//span[text()='Next']/parent::button"
        this.DealerDoc = "//label[text()='Dealer License']/../../../following-sibling::div/div[2]/input[@type='file']"
        this.DealerExpDateCalendar = "(//button[@aria-label='Calendar'])[1]"
        this.ResaleDoc = "//label[text()='Resale Tax ID']/../../../following-sibling::div/div[2]/input[@type='file']"
        this.ResaleExpDateCalandar = "(//button[@aria-label='Calendar'])[2]"
        this.VerificationOwnDoc = "//label[text()='Verification of ownership']/../../../following-sibling::div/div[2]/input[@type='file']"
        this.AuthorizationDoc = "//label[text()='Authorization to bid']/../../../following-sibling::div/div[2]/input[@type='file']"


    }
}
