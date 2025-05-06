import{test} from '@playwright/test'
import { AddVinPage } from '../Pages/AddVinPage'
import { BidderInvidualPage } from '../Pages/BidderInvidualPage'

test('Creating account',async({page}) =>
    {
        const addvinpage = new AddVinPage(page)
        const bidderinvidualpage = new BidderInvidualPage(page)
    
        await bidderinvidualpage.BidderOpportunityPremium()
        await addvinpage.SignIn()
    })
test.skip('Registering Individual Account and selecting account as Individual',async({page}) =>
        {
            const addvinpage = new AddVinPage(page)
            const bidderinvidualpage = new BidderInvidualPage(page)
        
            await bidderinvidualpage.BidderOpportunityPremium()
            await addvinpage.SignIn()
            await bidderinvidualpage.IndividualDetails()
            await bidderinvidualpage.IndividualRegistration()
        })

test('Creating All four address and selecting Bid Limit as Bidding Collalarial',async({page}) =>
       {
                const addvinpage = new AddVinPage(page)
                const bidderinvidualpage = new BidderInvidualPage(page)
            
                await bidderinvidualpage.BidderOpportunityPremium()
                await addvinpage.SignIn()
                await bidderinvidualpage.IndividualDetails()
                await bidderinvidualpage.IndividualRegistration()
                await bidderinvidualpage.AddressDetails()
                await bidderinvidualpage.DesiredBidLimit()
        })
test('Additing Personal Documants and Products to the cart and making payment',async({page}) =>
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
        })
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