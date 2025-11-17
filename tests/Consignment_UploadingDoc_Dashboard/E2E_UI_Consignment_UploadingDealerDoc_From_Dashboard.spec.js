import{test} from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage'
import { AddMediaPage } from '../../Pages/AddMediaPage'
import { ApplicationInfoPage } from '../../Pages/ApplicationInfoPage'
import { DealerPage } from '../../Pages/DealerPage'
import { TrustPage } from '../../Pages/TrustPage'

test('Creating Dealer Consignment without documents and upload documents in dashboard',async({page}) =>
{
    const addvinpage = new AddVinPage(page)
    const addmediapage = new AddMediaPage(page)
    const applicationinfopage = new ApplicationInfoPage(page)
    const dealerpage = new DealerPage(page)
    const trustpage = new TrustPage(page)

    //Dealer
    await addvinpage.ConsignmentURL()
    await addvinpage.SignIn()
    await addvinpage.VehicleDetailsone()
    await addvinpage.PowerSourceElectric()
    await addvinpage.Mileage()
    await addvinpage.VehicleDescp()
    await addmediapage.AdditionalPhotos()
    await dealerpage.DealerWithoutDocUploadingfromDashboard()
    await applicationinfopage.FinishApplication()
    await applicationinfopage.ReviewApp()
    await applicationinfopage.ViewMySubmission()
    await applicationinfopage.ConsignmentDashboardwithoutDocument()
})