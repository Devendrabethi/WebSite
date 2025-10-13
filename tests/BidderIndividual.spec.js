import{test} from '@playwright/test'
import { AddVinPage } from '../Pages/AddVinPage'
import { BidderInvidualPage } from '../Pages/BidderInvidualPage'

test('Creating Bidder Opportunity For Individual With Premium Package with DocuSign',async({page}) =>
{
    const addvinpage = new AddVinPage(page)
    const bidderinvidualpage = new BidderInvidualPage(page)

    await bidderinvidualpage.BidderOpportunityPremium()
    await addvinpage.SignIn()
    await bidderinvidualpage.IndividualDetails()
    await bidderinvidualpage.IndividualRegistration()
    await bidderinvidualpage.AddressDetails()
    await bidderinvidualpage.DesiredBidLimit()
    await bidderinvidualpage.AdditionalDocument()
    await bidderinvidualpage.AddProducts()
    await bidderinvidualpage.CardDetails()
    await bidderinvidualpage.PersonalDocuSign()
    await bidderinvidualpage.ViewBidderOpportunity()
})