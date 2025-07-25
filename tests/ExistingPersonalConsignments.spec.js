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
    await addvinpage.ConsignmentURL()
    await addvinpage.ExistingAccount()//existing
    await addvinpage.VehicleDetailsone()
    await addvinpage.PowerSource()
    await addvinpage.VehicleDetailstwo()
    await addvinpage.Mileage()
    await addvinpage.VehicleDescp()
    //await addmediapage.MainPhotos()
    await addmediapage.AdditionalPhotos()
    await titledocument_page.ExistingVehicleDocument()
    await applicationinfopage.FinishApplication()
    await applicationinfopage.ReviewApp()
    await trustpage.ViewMySubmission()
})