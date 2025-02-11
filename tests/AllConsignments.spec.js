import{test} from '@playwright/test'
import { AddVinPage } from '../Pages/AddVinPage'
import { AddMediaPage } from '../Pages/AddMediaPage'
import { TitleDocument_Page } from '../Pages/TitleDocument_Page'
import { ApplicationInfoPage } from '../Pages/ApplicationInfoPage'
import { BusinessPage } from '../Pages/BusinessPage'
import { DealerPage } from '../Pages/DealerPage'
import { TrustPage } from '../Pages/TrustPage'

test('test',async({page}) =>
{
    const addvinpage = new AddVinPage(page)
    const addmediapage = new AddMediaPage(page)
    const titledocument_page = new TitleDocument_Page(page)
    const applicationinfopage = new ApplicationInfoPage(page)
    const businesspage = new BusinessPage(page)
    const dealerpage = new DealerPage(page)
    const trustpage = new TrustPage(page)

    //Individual Main
    await addvinpage.SignIn()
    await addvinpage.VehicleDetailsone()
    await addvinpage.PowerSource()
    await addvinpage.VehicleDetailstwo()
    await addvinpage.Mileage()
    await addvinpage.VehicleDescp()
    await addmediapage.MainPhotos()
    await addmediapage.AdditionalPhotos()
    await titledocument_page.VehicleDocument()
    await applicationinfopage.FinishApplication()
    await applicationinfopage.ReviewApp()

    //Business
    await businesspage.StartAnotherApp()
    await addvinpage.VehicleDetailsone()
    await addvinpage.PowerSourceHyBrid()
    await addvinpage.Mileage()
    await addvinpage.VehicleDescp()
    await addmediapage.MainPhotos()
    await addmediapage.AdditionalPhotos()
    await businesspage.BusinessVehicleDocument()
    await applicationinfopage.FinishApplication()
    await applicationinfopage.ReviewApp()

    //Dealer
    await businesspage.StartAnotherApp()
    await addvinpage.VehicleDetailsone()
    await addvinpage.PowerSourceElectric()
    await addvinpage.Mileage()
    await addvinpage.VehicleDescp()
    await addmediapage.MainPhotos()
    await addmediapage.AdditionalPhotos()
    await dealerpage.DealerVehicleDocument()
    await applicationinfopage.FinishApplication()
    await applicationinfopage.ReviewApp()

    //Trust
    await businesspage.StartAnotherApp()
    await addvinpage.VehicleDetailsone()
    await addvinpage.PowerSourceDiesel()
    await addvinpage.Mileage()
    await addvinpage.VehicleDescp()
    await addmediapage.MainPhotos()
    await addmediapage.AdditionalPhotos()
    await trustpage.TrustVehicleDocument()
    await applicationinfopage.FinishApplication()
    await applicationinfopage.ReviewApp()

    await trustpage.ViewMySubmission()
})