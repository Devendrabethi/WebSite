import{test} from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage'
import { BidderInvidualPage } from '../../Pages/BidderInvidualPage'
import { BidderBusinessPage } from '../../Pages/BidderBusinessPage'

test('Creating Bidder Opportunity For Business With Select Package',async({page}) =>
{
    const addvinpage = new AddVinPage(page)
    const bidderinvidualpage = new BidderInvidualPage(page)
    const bidderbusinesspage = new BidderBusinessPage(page)

    await bidderbusinesspage.BidderOpportunitySelect()
    await addvinpage.ExistingAccount()//existing
    await bidderinvidualpage.IndividualDetails()
    await bidderbusinesspage.BusinessRegistration()
    await bidderinvidualpage.AddressDetails()
    await bidderbusinesspage.DesiredBidLimit()
    await bidderinvidualpage.AdditionalDocument()
    await bidderbusinesspage.BusinessDocument()
    await bidderinvidualpage.AddProducts()
    await bidderinvidualpage.CardDetails()
    await bidderinvidualpage.PersonalDocuSign()
    await bidderinvidualpage.ViewBidderOpportunity()

})