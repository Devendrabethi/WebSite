exports.BidderIndividual_WebElements = 
class BidderIndividual_WebElements
{
    constructor() 
    {
        this.Acceptpopup = "//button[@data-tid='banner-accept']"
        this.DriverLicenseDoc = "//label[text()=\"Driver's License\"]/../../../following-sibling::div/div[2]/input[@type='file']"
        this.MobileNumber_Field = "//label[text()='Mobile Number']/following-sibling::div[1]/input"
        
        this.SelectIndividualBox = "//input[@value='individual']/../parent::label"
        this.MallingAddress = "(//input[@name='addressSearch'])[1]"
        this.Vehicleaddress = "(//input[@name='addressSearch'])[2]"
        this.TitlePaperwork = "(//input[@name='addressSearch'])[3]"
        this.Biddingaddress = "(//input[@name='addressSearch'])[4]"
        this.SelectAddress = "(//div[contains(@data-key, 'address.')])[1]"
        this.SelectCountyDropdown = "//span[text()='County']/parent::div/following-sibling::button"
        this.Select_County = "(//div[@aria-label='Suggestions']/div)[1]"
        this.DesiredBidLimit_Field = "//label[text()='Desired bid limit']/following-sibling::div/input"
        this.BiddingCollateralBox = "//input[@value='biddingCollateral']/../parent::label"

        this.CustomerPhoto = "//label[text()='Recent color photo']/../../../following-sibling::div/div[2]/input[@type='file']"
        this.Crop = "//span[text()='Crop']/parent::button"
        this.Insurance = "//label[text()='Auto insurance']/../../../following-sibling::div/div[2]/input[@type='file']"
        this.Calendar = "//button[@aria-label='Calendar']"
        this.ChangeMonth = "//button[@aria-label='Month']"
        this.SelectDecember = "//div[@data-key='12']"
        this.SelectDate = "//button[@slot='next']/../following-sibling::table/tbody/tr[4]/td[4]"


        this.FirstProduct = "//th[text()='Additional Items']/../parent::thead/following-sibling::tbody/tr[1]/td[3]/div/div/input[@aria-label='Quantity']"
        this.SecoundProduct = "//th[text()='Additional Items']/../parent::thead/following-sibling::tbody/tr[2]/td[3]/div/div/input[@aria-label='Quantity']"
        this.ThiredProduct = "//th[text()='Additional Items']/../parent::thead/following-sibling::tbody/tr[3]/td[3]/div/div/input[@aria-label='Quantity']"
        this.FourthProduct = "//th[text()='Additional Items']/../parent::thead/following-sibling::tbody/tr[4]/td[3]/div/div/input[@aria-label='Quantity']"
        this.MuscleLoungeQuantity = "//th[text()='Additional Items']/../parent::thead/following-sibling::tbody/tr[5]/td[3]/div/div/input[@aria-label='Quantity']"

        this.CardDetails_Checkbox = "//label[contains(text(),'My billing contact')]"
        this.Slect_ExistingAddress = "//button[text()='Select an existing address']"
        this.Select_MailingAddress = "//p[text()='Mailing Address']"
        this.ConfirmSelection = "//span[text()='Confirm Selection']"
        this.CancelSelection = "//button[text()='Cancel']"

        this.CardFirstName = "//input[@name='firstNameCard']"
        this.CardLastName = "//input[@name='lastNameCard']"

        this.frame = "//iframe[@class='sq-card-component']"

        this.CardNum = "//input[@title='Credit card number']"
        this.CardExpDate = "//input[@title='Expiration date']"
        this.Cvv = "//input[@title='CVV']"
        this.ZipCode = "//input[@title='ZIP Code']"

        this.SubmitOpportunity = "//span[text()='Pay for registration']/parent::button"
        this.ConfirmRegistration = "//span[text()='Confirm registration']/parent::button"

        this.ViewBidderOpportunity = "//span[text()='View my agreement']/parent::a"

        this.Select_Registration = "//div[@aria-label='Consignment details']/a[contains(@id,'info/registration')]"
        this.Select_Addresses = "//div[@aria-label='Consignment details']/a[contains(@id,'info/addresses')]"
        this.Select_DocumentsTab = "//div[@aria-label='Consignment details']/a[contains(@id,'documents')]"
        this.FirstDocument = "//p[text()='Auto insurance']/parent::div/button/div"
        this.AdditionalPhotos = "//input[@type='file']"
        this.Upload_Button = "//button[text()='Upload']"
        this.SecondDocument = "//p[text()='Dealer license']/parent::div/button/div"
        this.ThirdDocument = "//p[text()='Resale tax ID']/parent::div/button/div"
        this.FourthDocument = "//p[text()='Verification of ownership']/parent::div/button/div"
        this.FivthDocument = "//p[text()='Authorization to bid']/parent::div/button/div"
        this.Select_PaymentMethodTab = "//div[@aria-label='Consignment details']/a[contains(@id,'method')]"
        this.Select_BiddingCollateralReturnAddress = "//div[@aria-label='Consignment details']/a[contains(@id,'method/registration')]"
        this.Select_AbsenteeBidsTab = "//div[@aria-label='Consignment details']/a[contains(@id,'absentee')]"


        this.CardFullName = "//input[@name='cardholderName']"
        this.CCZipCode = "//input[@title='ZIP Code']"
        this.CCAddress_Field = "//input[@name='addressSearch']"
        this.CCNextbtn = "//span[text()='Next']/parent::button"

        this.FrameDocuSign1 = "//iframe[contains(@id,'js-library-iframe')]"
        this.FrameDocuSign2 = "//iframe[contains(@id,'ds-signing-document')]"   //ds-signing-document

        this.checkbox = "//label[@data-qa='ersd-agree-checkbox-label']"
        this.continuebtn = "//span[text()='Continue']"
        this.personalsignin = "//div[text()='Sign']"
        this.AdoptandSign = "//button[text()='Adopt and Sign']"
        this.BuyerInitialSecondPage = "(//div[text()='Initial'])[1]"
        this.BuyerInitialThirdPage = "(//div[text()='Initial'])[2]"
        this.SubmitApplication = "//span[text()='Submit application']"

        this.Absentee_Personalsignin = "(//div[text()='Sign'])[1]"
        this.Absentee_PrintName = "//label[text()='Required - PRINT NAME']/preceding-sibling::input"
        this.Absentee_SignatureRequired = "(//div[text()='Sign'])[2]"

    }
}
