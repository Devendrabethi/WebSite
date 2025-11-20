import{test} from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage'
import { BidderInvidualPage } from '../../Pages/BidderInvidualPage'
import { BidderDealerPage } from '../../Pages/BidderDealerPage'

// test('Creating Bidder Opportunity For Dealer With Pre-Premium Package Uploading documents in Dashboard',async({page}) =>
// {
//     const addvinpage = new AddVinPage(page)
//     const bidderinvidualpage = new BidderInvidualPage(page)
//     const bidderdealerpage = new BidderDealerPage(page)

//     await bidderdealerpage.BidderOpportunityPre_premium()
//     await addvinpage.SignIn()
//     await bidderinvidualpage.IndividualDetails()
//     await bidderdealerpage.DealerRegistration()
//     await bidderinvidualpage.AddressDetails()
//     await bidderdealerpage.DesiredBidLimit()
//     await bidderinvidualpage.AdditionalWithoutDocumentUploadingfromDashboard()
//     await bidderdealerpage.DealerWithoutDocUploadingfromDashboard()
//     await bidderinvidualpage.AddProducts()
//     await bidderinvidualpage.CardDetails()
//     await bidderinvidualpage.PersonalDocuSign()
//     await bidderinvidualpage.BidderDashboardWithoutDocument()
// })

test('Creating Bidder Opportunity For Dealer With Pre-Premium Package Uploading documents in Dashboard', async ({ page }) => {

  const addvinpage = new AddVinPage(page);
  const bidderinvidualpage = new BidderInvidualPage(page);
  const bidderdealerpage = new BidderDealerPage(page);

  await test.step("1. Start Dealer Pre-Premium Opportunity", async () => {
    await bidderdealerpage.BidderOpportunityPre_premium();
  });

  await test.step("2. Creating new account", async () => {
    await addvinpage.SignIn();
  });

    // await test.step("Confirm Email", async () => {
    //   await addvinpage.ConfirmEmail();
    // });

    //  await test.step("Login", async () => {
    //   await addvinpage.LoginIn();
    // });

  await test.step("3. Enter Individual Details", async () => {
    await bidderinvidualpage.IndividualDetails();
  });

  await test.step("4. Complete Dealer Registration", async () => {
    await bidderdealerpage.DealerRegistration();
  });

  await test.step("5. Enter Address Details", async () => {
    await bidderinvidualpage.AddressDetails();
  });

  await test.step("6. Set Desired Bid Limit", async () => {
    await bidderdealerpage.DesiredBidLimit();
  });

  await test.step("7. Proceed Without Uploading Individual Documents", async () => {
    await bidderinvidualpage.AdditionalWithoutDocumentUploadingfromDashboard();
  });

  await test.step("8. Proceed Without Uploading Dealer Documents", async () => {
    await bidderdealerpage.DealerWithoutDocUploadingfromDashboard();
  });

  await test.step("9. Add Products", async () => {
    await bidderinvidualpage.AddProducts();
  });

  await test.step("10. Enter Card Details", async () => {
    await bidderinvidualpage.CardDetails();
  });

  await test.step("11. Complete DocuSign", async () => {
    await bidderinvidualpage.PersonalDocuSign();
  });

  await test.step("12. Upload Documents Later From Dashboard", async () => {
    await bidderinvidualpage.BidderDashboardWithoutDocument();
  });

});
