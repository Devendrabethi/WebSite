import{test} from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage'
import { BidderInvidualPage } from '../../Pages/BidderInvidualPage'
import { BidderDealerPage } from '../../Pages/BidderDealerPage'

test('Creating Bidder Opportunity For Dealer With Pre-Premium Package', async ({ page }) => {

  const addvinpage = new AddVinPage(page);
  const bidderinvidualpage = new BidderInvidualPage(page);
  const bidderdealerpage = new BidderDealerPage(page);

  await test.step("1. Start Dealer Pre-Premium Opportunity", async () => {
    await bidderdealerpage.BidderOpportunityPre_premium();
  });

  await test.step("2. Creating new account", async () => {
    await addvinpage.SignIn();
  });

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

  await test.step("7. Upload Additional Documents (Individual)", async () => {
    await bidderinvidualpage.AdditionalDocument();
  });

  await test.step("8. Upload Dealer Documents", async () => {
    await bidderdealerpage.DealerDocument();
  });

  await test.step("9. Add Products", async () => {
    await bidderinvidualpage.AddProducts();
  });

  await test.step("10. Enter Card Details", async () => {
    await bidderinvidualpage.CardDetails();
  });

  await test.step("11. Complete DocuSign (Personal)", async () => {
    await bidderinvidualpage.PersonalDocuSign();
  });

  await test.step("12. View Created Bidder Opportunity", async () => {
    await bidderinvidualpage.ViewBidderOpportunity();
  });

});
