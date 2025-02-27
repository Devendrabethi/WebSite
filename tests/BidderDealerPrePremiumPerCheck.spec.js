import{test} from '@playwright/test'
import { AddVinPage } from '../Pages/AddVinPage'
import { BidderInvidualPage } from '../Pages/BidderInvidualPage'
import { BidderBusinessPage } from '../Pages/BidderBusinessPage'
import { BidderDealerPage } from '../Pages/BidderDealerPage'

test('test',async({page}) =>
{
    const addvinpage = new AddVinPage(page)
    const bidderinvidualpage = new BidderInvidualPage(page)
    const bidderbusinesspage = new BidderBusinessPage(page)
    const bidderdealerpage = new BidderDealerPage(page)

    await bidderdealerpage.BidderOpportunityAbsentee()
    await addvinpage.SignIn()
    await bidderinvidualpage.IndividualDetails()
    await bidderdealerpage.DealerRegistration()
    await bidderinvidualpage.AddressDetails()
    await bidderdealerpage.DesiredBidLimit()
    await bidderinvidualpage.AdditionalDocument()
    await bidderdealerpage.DealerDocument()
    await bidderinvidualpage.AddProducts()
    await bidderinvidualpage.CardDetails()
    await bidderinvidualpage.PersonalDocuSign()
    await bidderinvidualpage.ViewBidderOpportunity()

})