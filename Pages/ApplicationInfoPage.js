import { expect } from '@playwright/test'
import { AddVIN_WebElements } from '../WebElements/AddVIN_WebElements.js'    
import { TestData } from '../TestData/testdata.js';
import { ApplicationInfo_WebElements } from '../WebElements/ApplicationInfo_WebElements.js'  

exports.ApplicationInfoPage =
class ApplicationInfoPage
{
    constructor(page)
    {
        this.page = page
        this.addVIN_webelements =  new AddVIN_WebElements()
        this.applicationinfo_webelements =  new ApplicationInfo_WebElements()
        this.testdata = new TestData()
    }
    async FinishApplication()
    {
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.applicationinfo_webelements.VehicleWorth_Field).fill(this.testdata.VechileWorth,{timeout:90000})
        await this.page.locator(this.applicationinfo_webelements.ReserveType_Dropdown).click()
        await this.page.locator(this.applicationinfo_webelements.Reserve).click()
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.applicationinfo_webelements.ConsignmentSpecialist).click()
        await this.page.waitForTimeout(5000)
        await this.page.screenshot({ path: './ScreenShot/16 ConsignmentSpecialist.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.Select_ConsignmentSpecialist).click()
        await this.page.locator(this.applicationinfo_webelements.AnothweAuction).click()
        await this.page.locator(this.applicationinfo_webelements.SelectYes).click()
        await this.page.screenshot({ path: './ScreenShot/17 VehicleWorth.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
    }
    async ReviewApp()
    {
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.applicationinfo_webelements.SignatureName).fill(this.testdata.Signature)
        await this.page.locator(this.applicationinfo_webelements.Calendar).click()
        await this.page.locator(this.applicationinfo_webelements.CurrentDate).click()
        await this.page.screenshot({ path: './ScreenShot/18 ConsignmentReview.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.SubmitApplicaion).click()
    }
        async ViewMySubmission()
    {
        await this.page.locator(this.applicationinfo_webelements.ViewSubmission).click({timeout:90000})
        await this.page.screenshot({ path: './ScreenShot/19 ViewSubmission.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.Consignmentbutton).click()
        await this.page.waitForTimeout(5000);
        await this.page.screenshot({ path: './ScreenShot/20 ConsignmentDashboard.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.RemovePastEvent).click()
        await this.page.waitForTimeout(5000);
        await this.page.locator(this.applicationinfo_webelements.FormLibrary).click()
        await this.page.waitForTimeout(5000);
        await this.page.screenshot({ path: './ScreenShot/21 FormLibrary.png', fullPage: true})
    }
    async ConsignmentDashboardwithDocument()
    {
        await this.page.locator(this.applicationinfo_webelements.Consignmentbutton).click()
        await this.page.locator(this.applicationinfo_webelements.RemovePastEvent).click()
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.applicationinfo_webelements.SelectFirstVehicle).click()
        await this.page.screenshot({ path: './ScreenShot/22 VehicleInformation.png', fullPage: true})
        await this.page.waitForTimeout(10000)
        await this.page.locator(this.applicationinfo_webelements.Modifield_Horsepower_Text).click()
        await this.page.screenshot({ path: './ScreenShot/23 VehicleDetails.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.ShortDescription).click()
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/24 VehicleShortDescription.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.LongDescription).click()
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/25 VehicleShortDescription.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.MediaTab).click()
        await this.page.locator(this.applicationinfo_webelements.UploadMedia_Button).click()
         const fileToUpload = 
        [
             "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\front.jpg",
             "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\rare.gif",
             "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\side.png",
            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\interior.jpeg",
            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\engine.heic",
            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\vin.heif",
            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\2023_mclaren_artura_coupe_base_fq_oem_15_500.jpg.webp"
        ]
        await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload)
        await this.page.waitForTimeout(5000);
        await this.page.locator(this.applicationinfo_webelements.Upload_Button).click()
        await this.page.locator(this.applicationinfo_webelements.UploadAll_Button).click()
        await this.page.waitForTimeout(25000);
        await this.page.locator(this.applicationinfo_webelements.DocumentTab).click()
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/26 DocumentInfo.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.IndividualDocumentSection).click()
        await this.page.waitForTimeout(3000);
        //await this.page.reload()
        await this.page.locator(this.applicationinfo_webelements.IndividualDocumentSection).click()
        await this.page.waitForTimeout(15000);
        await this.page.screenshot({ path: './ScreenShot/27 DocumentIndividualWithDocuments.png', fullPage: true})
        //await this.page.locator(this.applicationinfo_webelements.BusinessDocumentSection).click()
         const BusinessDocumentSection = this.page.locator(this.applicationinfo_webelements.BusinessDocumentSection)
        try {
                await BusinessDocumentSection.waitFor({ timeout: 10000 });
                await BusinessDocumentSection.click({timeout:30000});
                console.log('Business Document Section clicked successfully');
            } catch (error) 
            {
                console.error('Failed to click Business Document Section:', error);
            }
        await this.page.waitForTimeout(3000);
        await this.page.screenshot({ path: './ScreenShot/28 DocumentBusinessInfoWithDocuments.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.ApplicantInfoTab).click()
        await this.page.waitForTimeout(3000);
        await this.page.screenshot({ path: './ScreenShot/29 ApplicantInfo.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.Applicant_Address).click()
        await this.page.waitForTimeout(3000);
        await this.page.screenshot({ path: './ScreenShot/30 ApplicantInfo.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.MyAccount_Button).click()
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.applicationinfo_webelements.ViewAccount).click()
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.applicationinfo_webelements.EditAccount).click()
        await this.page.screenshot({ path: './ScreenShot/31 ViewAccount.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.Close_ViewAccount).click()
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.applicationinfo_webelements.Document).click()
        await this.page.waitForTimeout(2000);
        await this.page.screenshot({ path: './ScreenShot/32 DocumentWithoutdocuments.png', fullPage: true})
           const fileToUpload1 = 
        {
            "Passport_Document" :       "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\vin.heif",
            "Insurance_Document":       "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Insurance.pdf",
            "DriverLicense_Document":   "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Driver License.jpg",
            "Bank_Document" :           "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\business Lpng.png",
            "AdditionalBankLetter_Document":         "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\engine.heic"
        }
        try {
            const passportDocument = this.page.locator(this.applicationinfo_webelements.Passport_Document);
            // Wait ONLY for Passport_Document
            await passportDocument.waitFor({ timeout: 10000 });
            await passportDocument.click({ timeout: 30000 });
            // No waits for below steps
            await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.Passport_Document);
            await this.page.locator(this.applicationinfo_webelements.Upload_Button).click();

            console.log('Passport document uploaded successfully');
        } catch (error) {
            console.error('Failed to upload Passport document:', error);
        }
        try {
            const passportAlreadyExist = this.page.locator(this.applicationinfo_webelements.PassportAlreadyExist);
            await passportAlreadyExist.waitFor({ timeout: 10000 });
            await passportAlreadyExist.click({ timeout: 30000 });
            console.log('Passport Already Exist clicked successfully');
            await this.page.locator(this.applicationinfo_webelements.Passport_Document).click()
            await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.Passport_Document)
            await this.page.locator(this.applicationinfo_webelements.Upload_Button).click()
        } catch (error) {
            console.error('Failed to click Passport Already Exist:', error);
        }
        await this.page.waitForTimeout(3000);
        try {
                const Insurance_Document = this.page.locator(this.applicationinfo_webelements.Insurance_Document);
                await Insurance_Document.waitFor({ timeout: 10000 });
                await Insurance_Document.click({ timeout: 30000 });
                console.log('Insurance Already Exist clicked successfully');
                await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.Insurance_Document);
                await this.page.locator(this.applicationinfo_webelements.Upload_Button).click();
            } catch (error) {
                console.error('Failed to upload Insurance document:', error);
            }
        try {
            const InsuranceAlreadyExist = this.page.locator(this.applicationinfo_webelements.InsuranceAlreadyExist);
            await InsuranceAlreadyExist.waitFor({ timeout: 10000 });
            await InsuranceAlreadyExist.click({ timeout: 30000 });
            console.log('Passport Already Exist clicked successfully');
            await this.page.locator(this.applicationinfo_webelements.Insurance_Document).click()
                    await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.Insurance_Document)
        await this.page.locator(this.applicationinfo_webelements.Upload_Button).click()
        } catch (error) {
            console.error('Failed to click Passport Already Exist:', error);
        }
        await this.page.waitForTimeout(3000);
        try {
                const DriverLicense_Document = this.page.locator(this.applicationinfo_webelements.DriverLicense_Document);
                await DriverLicense_Document.waitFor({ timeout: 10000 });
                await DriverLicense_Document.click({ timeout: 30000 });
                console.log('Driver License Already Exist clicked successfully');
                await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.DriverLicense_Document);
                await this.page.locator(this.applicationinfo_webelements.Upload_Button).click();
            } catch (error) {
                console.error('Failed to upload Driver License document:', error);
            }
        try {
            const DrierLAlreadyExist = this.page.locator(this.applicationinfo_webelements.DrierLAlreadyExist);
            await DrierLAlreadyExist.waitFor({ timeout: 10000 });
            await DrierLAlreadyExist.click({ timeout: 30000 });
            console.log('Passport Already Exist clicked successfully');
            await this.page.locator(this.applicationinfo_webelements.DriverLicense_Document).click()
                    await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.DriverLicense_Document)
        await this.page.locator(this.applicationinfo_webelements.Upload_Button).click()
        } catch (error) {
            console.error('Failed to click Passport Already Exist:', error);
        }
        await this.page.waitForTimeout(3000);
        try {
                const Bank_Document = this.page.locator(this.applicationinfo_webelements.Bank_Document);
                await Bank_Document.waitFor({ timeout: 10000 });
                await Bank_Document.click({ timeout: 30000 });
                console.log('Bank Already Exist clicked successfully');
                await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.Bank_Document);
                await this.page.locator(this.applicationinfo_webelements.Upload_Button).click();
            } catch (error) {
                console.error('Failed to upload Bank document:', error);
            }
        try {
            const BankLetterAlreadyExist = this.page.locator(this.applicationinfo_webelements.BankLetterAlreadyExist);
            await BankLetterAlreadyExist.waitFor({ timeout: 10000 });
            await BankLetterAlreadyExist.click({ timeout: 30000 });
            console.log('Passport Already Exist clicked successfully');
            await this.page.locator(this.applicationinfo_webelements.Bank_Document).click()
                    await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.Bank_Document)
        await this.page.locator(this.applicationinfo_webelements.Upload_Button).click()
        } catch (error) {
            console.error('Failed to click Passport Already Exist:', error);
        }
        await this.page.waitForTimeout(3000);
         try {
                const AdditionalBankLetter_Document = this.page.locator(this.applicationinfo_webelements.AdditionalBankLetter_Document);
                await AdditionalBankLetter_Document.waitFor({ timeout: 10000 });
                await AdditionalBankLetter_Document.click({ timeout: 30000 });
                console.log('Bank Already Exist clicked successfully');
                await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.AdditionalBankLetter_Document);
                await this.page.locator(this.applicationinfo_webelements.Upload_Button).click();
            } catch (error) {
                console.error('Failed to upload Bank document:', error);
            }
        try {
            const AdditionalLetterAlreadyExist = this.page.locator(this.applicationinfo_webelements.AdditionalLetterAlreadyExist);
            await AdditionalLetterAlreadyExist.waitFor({ timeout: 10000 });
            await AdditionalLetterAlreadyExist.click({ timeout: 30000 });
            console.log('Passport Already Exist clicked successfully');
            await this.page.locator(this.applicationinfo_webelements.AdditionalBankLetter_Document).click()
                    await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.AdditionalBankLetter_Document)
        await this.page.locator(this.applicationinfo_webelements.Upload_Button).click()
        } catch (error) {
            console.error('Failed to click Passport Already Exist:', error);
        }
        await this.page.waitForTimeout(3000);
        try {
                const TrustDocument = this.page.locator(this.applicationinfo_webelements.TrustDocument);
                await TrustDocument.waitFor({ timeout: 10000 });
                await TrustDocument.click({ timeout: 30000 });
                console.log('Bank Already Exist clicked successfully');
                await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.AdditionalBankLetter_Document);
                await this.page.locator(this.applicationinfo_webelements.Upload_Button).click();
            } catch (error) {
                console.error('Failed to upload Bank document:', error);
            }
        try {
            const TrustDocAlreadyExist = this.page.locator(this.applicationinfo_webelements.TrustDocAlreadyExist);
            await TrustDocAlreadyExist.waitFor({ timeout: 10000 });
            await TrustDocAlreadyExist.click({ timeout: 30000 });
            console.log('Passport Already Exist clicked successfully');
            await this.page.locator(this.applicationinfo_webelements.TrustDocument).click()
            await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.AdditionalBankLetter_Document)
            await this.page.locator(this.applicationinfo_webelements.Upload_Button).click()
            } catch (error) {
            console.error('Failed to click Passport Already Exist:', error);
            }
        await this.page.waitForTimeout(5000);
        await this.page.screenshot({ path: './ScreenShot/33 DocumentPersonalWithdocuments.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.Business_Document).click()
        await this.page.waitForTimeout(3000);
        await this.page.screenshot({ path: './ScreenShot/34 DocumentBusinessDocument.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.Addresses).click()
        await this.page.waitForTimeout(6000);
        await this.page.screenshot({ path: './ScreenShot/35 MalilingAddress.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.AddNew_Address).click()
        await this.page.locator(this.applicationinfo_webelements.MallingAddress).fill(this.testdata.MailingAddress)
        await this.page.locator(this.applicationinfo_webelements.SelectAddress).click()
        await this.page.locator(this.applicationinfo_webelements.AddressType_Dropdowm).click()
        await this.page.locator(this.applicationinfo_webelements.Mailing).click()
        await this.page.locator(this.applicationinfo_webelements.VehicleTitiling).click()
        await this.page.locator(this.applicationinfo_webelements.TitlePaperwork).click()
        await this.page.locator(this.applicationinfo_webelements.BiddingColl).click()
        await this.page.locator(this.applicationinfo_webelements.ProceedPayment).click()
        await this.page.goBack();
        await this.page.waitForTimeout(4000);
        await this.page.goForward(); 
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.applicationinfo_webelements.SaveChanges).click()
        await this.page.waitForTimeout(12000);
        await this.page.screenshot({ path: './ScreenShot/36 MalilingAddresswithall.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.Close_ViewAccount).click()
        await this.page.locator(this.applicationinfo_webelements.Consignmentbutton).click()
        await this.page.waitForTimeout(5000);
        await this.page.locator(this.applicationinfo_webelements.RemovePastEvent).click()
    }
    async ConsignmentDashboardwithoutDocument()
    {
        await this.page.locator(this.applicationinfo_webelements.Consignmentbutton).click()
        await this.page.locator(this.applicationinfo_webelements.RemovePastEvent).click()
        await this.page.locator(this.applicationinfo_webelements.SelectFirstVehicle).click()
        await this.page.screenshot({ path: './ScreenShot/37 VehicleInformation.png', fullPage: true})
        await this.page.waitForTimeout(10000)
        await this.page.locator(this.applicationinfo_webelements.Modifield_Horsepower_Text).click()
        await this.page.screenshot({ path: './ScreenShot/38 VehicleDetails.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.ShortDescription).click()
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/39 VehicleShortDescription.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.LongDescription).click()
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/40 VehicleShortDescription.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.MediaTab).click()
        await this.page.locator(this.applicationinfo_webelements.UploadMedia_Button).click()
         const fileToUpload = 
        [
             "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\front.jpg",
             "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\rare.gif",
             "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\side.png",
            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\interior.jpeg",
            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\engine.heic",
            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\vin.heif",
            "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\2023_mclaren_artura_coupe_base_fq_oem_15_500.jpg.webp"
        ]
        await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload)
        await this.page.waitForTimeout(5000);
        await this.page.locator(this.applicationinfo_webelements.Upload_Button).click()
        await this.page.locator(this.applicationinfo_webelements.UploadAll_Button).click()
        await this.page.waitForTimeout(25000);
        await this.page.locator(this.applicationinfo_webelements.DocumentTab).click()
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/41 DocumentInfo.png', fullPage: true})
        const fileToUpload1 = 
        {
            "fronttitle" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\engine.heic",
            "Backtitle":        "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\vin.heif",
            "trustDoc":         "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Insurance.pdf"
        }
        await this.page.locator(this.applicationinfo_webelements.IndividualDocumentSection).click()
        await this.page.screenshot({ path: './ScreenShot/42 DocumentIndividual.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.FirstDocument).click()
        await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.fronttitle)
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.applicationinfo_webelements.Upload_Button).click()
        //await this.page.waitForTimeout(5000);
        await this.page.locator(this.applicationinfo_webelements.SecondDocument).click()
        await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.Backtitle)
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.applicationinfo_webelements.Upload_Button).click()
        const ThirdDocument = this.page.locator(this.applicationinfo_webelements.ThirdDocument)
        try {
                    await ThirdDocument.waitFor({ timeout: 10000 });
                    await ThirdDocument.click();
                    await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.trustDoc);
                    await this.page.waitForTimeout(2000);
                    await this.page.locator(this.applicationinfo_webelements.Upload_Button).click();
                    await this.page.waitForTimeout(5000);
                    console.log('Third document uploaded successfully');
            } 
        catch (error) {
                    console.error('Error while uploading third document:', error);
        }
        //await this.page.reload()
        await this.page.locator(this.applicationinfo_webelements.IndividualDocumentSection).click()
        await this.page.waitForTimeout(15000);
        await this.page.screenshot({ path: './ScreenShot/43 DocumentIndividualWithDocuments.png', fullPage: true})
    try {
            await this.page.locator(this.applicationinfo_webelements.BusinessDocumentSection).click({timeout:60000});
            await this.page.screenshot({path: './ScreenShot/44 DocumentBusiness.png',fullPage: true});

            // First Document
            await this.page.locator(this.applicationinfo_webelements.FirstDocument).click();
            await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.fronttitle);
            await this.page.waitForTimeout(5000);
            await this.page.locator(this.applicationinfo_webelements.Upload_Button).click();
            // Second Document
            await this.page.locator(this.applicationinfo_webelements.FirstDocument).click();
            await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.Backtitle);
            await this.page.waitForTimeout(5000);
            await this.page.locator(this.applicationinfo_webelements.Upload_Button).click();
            console.log('First and Second documents uploaded successfully');
        }
    catch (error) 
        {
            console.error('Error in Business Document Section (First/Second):', error);
        }

// Third Document (within Business Document Section flow)
    try {
            await this.page.locator(this.applicationinfo_webelements.FirstDocument).click({timeout:60000});
            await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.trustDoc);
            await this.page.waitForTimeout(2000);
            await this.page.locator(this.applicationinfo_webelements.Upload_Button).click();
            await this.page.waitForTimeout(5000);
            console.log('Third document uploaded successfully');
        } 
    catch (error) 
        {
            console.error('Error uploading Third Document:', error);
        }

        //await this.page.reload()
        await this.page.locator(this.applicationinfo_webelements.BusinessDocumentSection).click()
        await this.page.waitForTimeout(15000);
        await this.page.screenshot({ path: './ScreenShot/45 DocumentBusinessInfoWithDocuments.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.ApplicantInfoTab).click()
        await this.page.waitForTimeout(3000);
        await this.page.screenshot({ path: './ScreenShot/46 ApplicantInfo.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.Applicant_Address).click()
        await this.page.waitForTimeout(3000);
        await this.page.screenshot({ path: './ScreenShot/47 ApplicantInfo.png', fullPage: true})
    }
}