import{test} from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage'
import { AddMediaPage } from '../../Pages/AddMediaPage'
import { TitleDocument_Page } from '../../Pages/TitleDocument_Page'
import { ApplicationInfoPage } from '../../Pages/ApplicationInfoPage'
import { BusinessPage } from '../../Pages/BusinessPage'
import { DealerPage } from '../../Pages/DealerPage'
import { TrustPage } from '../../Pages/TrustPage'

test('test',async({page}) =>
{
    const addvinpage = new AddVinPage(page)

    //Individual Main
    await addvinpage.ConsignmentURL()
    await addvinpage.SignIn()
    await addvinpage.ConfirmEmail()
})