import{test} from '@playwright/test'
import { AddVinPage } from '../Pages/AddVinPage'
import { AddMediaPage } from '../Pages/AddMediaPage'
import { ApplicationInfoPage } from '../Pages/ApplicationInfoPage'
import { BusinessPage } from '../Pages/BusinessPage'
import { TrustPage } from '../Pages/TrustPage'

test('test',async({page}) =>
{
    const addvinpage = new AddVinPage(page)
    const addmediapage = new AddMediaPage(page)
    const applicationinfopage = new ApplicationInfoPage(page)
    const businesspage = new BusinessPage(page)
    const trustpage = new TrustPage(page)

    //Business
    await addvinpage.ConsignmentURL()
    await addvinpage.SignIn()
    //await addvinpage.ExistingAccount()//Existing
    await addvinpage.VehicleDetailsone()
    await addvinpage.PowerSourceHyBrid()
    await addvinpage.Mileage()
    await addvinpage.VehicleDescp()
    await addmediapage.MainPhotos()
    await addmediapage.AdditionalPhotos()
    await businesspage.BusinessVehicleDocument()
    await applicationinfopage.FinishApplication()
    await applicationinfopage.ReviewApp()
    await trustpage.ViewMySubmission()

})