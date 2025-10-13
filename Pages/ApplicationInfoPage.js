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
        await this.page.locator(this.applicationinfo_webelements.ConsignmentSpecialist).click()
        await this.page.waitForTimeout(5000)
        await this.page.screenshot({ path: './ScreenShot/ConsignmentSpecialist.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.Select_ConsignmentSpecialist).click()
        await this.page.locator(this.applicationinfo_webelements.AnothweAuction).click()
        await this.page.locator(this.applicationinfo_webelements.SelectYes).click()
        await this.page.screenshot({ path: './ScreenShot/VehicleWorth.png', fullPage: true})
        await this.page.locator(this.addVIN_webelements.Nextbtn_Submit).click()
    }
    async ReviewApp()
    {
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.applicationinfo_webelements.SignatureName).fill(this.testdata.Signature)
        await this.page.locator(this.applicationinfo_webelements.Calendar).click()
        await this.page.locator(this.applicationinfo_webelements.CurrentDate).click()
        await this.page.screenshot({ path: './ScreenShot/ConsignmentReview.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.SubmitApplicaion).click()
    }
        async ViewMySubmission()
    {
        await this.page.locator(this.applicationinfo_webelements.ViewSubmission).click({timeout:90000})
        await this.page.screenshot({ path: './ScreenShot/ViewSubmission.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.Consignmentbutton).click()
        await this.page.waitForTimeout(5000);
        await this.page.screenshot({ path: './ScreenShot/ConsignmentDashboard.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.RemovePastEvent).click()
        await this.page.waitForTimeout(5000);
        await this.page.locator(this.applicationinfo_webelements.FormLibrary).click()
        await this.page.waitForTimeout(5000);
        await this.page.screenshot({ path: './ScreenShot/FormLibrary.png', fullPage: true})
    }
    async ConsignmentDashboardwithDocument()
    {
        await this.page.locator(this.applicationinfo_webelements.Consignmentbutton).click()
        await this.page.locator(this.applicationinfo_webelements.SelectFirstVehicle).click()
        await this.page.screenshot({ path: './ScreenShot/VehicleInformation.png', fullPage: true})
        await this.page.waitForTimeout(10000)
        await this.page.locator(this.applicationinfo_webelements.Modifield_Horsepower_Text).click()
        await this.page.screenshot({ path: './ScreenShot/VehicleDetails.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.ShortDescription).click()
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/VehicleShortDescription.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.LongDescription).click()
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/VehicleShortDescription.png', fullPage: true})
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
        await this.page.screenshot({ path: './ScreenShot/DocumentInfo.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.IndividualDocumentSection).click()
        await this.page.waitForTimeout(3000);
        await this.page.reload()
        await this.page.locator(this.applicationinfo_webelements.IndividualDocumentSection).click()
        await this.page.waitForTimeout(15000);
        await this.page.screenshot({ path: './ScreenShot/DocumentIndividualWithDocuments.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.BusinessDocumentSection).click()
        await this.page.waitForTimeout(3000);
        await this.page.reload()
        await this.page.locator(this.applicationinfo_webelements.BusinessDocumentSection).click()
        await this.page.waitForTimeout(15000);
        await this.page.screenshot({ path: './ScreenShot/DocumentBusinessInfoWithDocuments.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.ApplicantInfoTab).click()
        await this.page.waitForTimeout(3000);
        await this.page.screenshot({ path: './ScreenShot/ApplicantInfo.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.Applicant_Address).click()
        await this.page.waitForTimeout(3000);
        await this.page.screenshot({ path: './ScreenShot/ApplicantInfo.png', fullPage: true})
    }
    async ConsignmentDashboardwithoutDocument()
    {
        await this.page.locator(this.applicationinfo_webelements.Consignmentbutton).click()
        await this.page.locator(this.applicationinfo_webelements.SelectFirstVehicle).click()
        await this.page.screenshot({ path: './ScreenShot/VehicleInformation.png', fullPage: true})
        await this.page.waitForTimeout(10000)
        await this.page.locator(this.applicationinfo_webelements.Modifield_Horsepower_Text).click()
        await this.page.screenshot({ path: './ScreenShot/VehicleDetails.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.ShortDescription).click()
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/VehicleShortDescription.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.LongDescription).click()
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/VehicleShortDescription.png', fullPage: true})
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
        await this.page.screenshot({ path: './ScreenShot/DocumentInfo.png', fullPage: true})
        const fileToUpload1 = 
        {
            "fronttitle" :      "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Insurance.pdf",
            "Backtitle":        "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Insurance.pdf",
            "trustDoc":         "C:\\Users\\bdevendra\\source\\repos\\Website Playwright\\Photos\\Insurance.pdf"
        }
        await this.page.locator(this.applicationinfo_webelements.IndividualDocumentSection).click()
        await this.page.screenshot({ path: './ScreenShot/DocumentIndividual.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.FirstDocument).click()
        await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.fronttitle)
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.applicationinfo_webelements.Upload_Button).click()
        //await this.page.waitForTimeout(5000);
        await this.page.locator(this.applicationinfo_webelements.SecondDocument).click()
        await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.Backtitle)
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.applicationinfo_webelements.Upload_Button).click()
        //await this.page.waitForTimeout(5000);
        await this.page.locator(this.applicationinfo_webelements.ThirdDocument).click()
        await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.trustDoc)
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.applicationinfo_webelements.Upload_Button).click()
        await this.page.waitForTimeout(5000);
        await this.page.reload()
        await this.page.locator(this.applicationinfo_webelements.IndividualDocumentSection).click()
        await this.page.waitForTimeout(15000);
        await this.page.screenshot({ path: './ScreenShot/DocumentIndividualWithDocuments.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.BusinessDocumentSection).click()
        await this.page.screenshot({ path: './ScreenShot/DocumentBusiness.png', fullPage: true})
         await this.page.locator(this.applicationinfo_webelements.FirstDocument).click()
        await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.fronttitle)
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.applicationinfo_webelements.Upload_Button).click()
        //await this.page.waitForTimeout(5000);
        await this.page.locator(this.applicationinfo_webelements.SecondDocument).click()
        await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.Backtitle)
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.applicationinfo_webelements.Upload_Button).click()
        //await this.page.waitForTimeout(5000);
        await this.page.locator(this.applicationinfo_webelements.ThirdDocument).click()
        await this.page.locator(this.applicationinfo_webelements.AdditionalPhotos).setInputFiles(fileToUpload1.trustDoc)
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.applicationinfo_webelements.Upload_Button).click()
        await this.page.waitForTimeout(5000);
        await this.page.reload()
        await this.page.locator(this.applicationinfo_webelements.BusinessDocumentSection).click()
        await this.page.waitForTimeout(15000);
        await this.page.screenshot({ path: './ScreenShot/DocumentBusinessInfoWithDocuments.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.ApplicantInfoTab).click()
        await this.page.waitForTimeout(3000);
        await this.page.screenshot({ path: './ScreenShot/ApplicantInfo.png', fullPage: true})
        await this.page.locator(this.applicationinfo_webelements.Applicant_Address).click()
        await this.page.waitForTimeout(3000);
        await this.page.screenshot({ path: './ScreenShot/ApplicantInfo.png', fullPage: true})
    }
}