import{test} from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage'
import { BidderInvidualPage } from '../../Pages/BidderInvidualPage'
import { BidderBusinessPage } from '../../Pages/BidderBusinessPage'
import { BidderDealerPage } from '../../Pages/BidderDealerPage'

test('Existing account and Creating Bidder Opportunity For Dealer With Pre-Premium Package', async ({ page }) => {

  const addvinpage = new AddVinPage(page);
  const bidderinvidualpage = new BidderInvidualPage(page);
  const bidderdealerpage = new BidderDealerPage(page);

  await test.step("1. Start Dealer Pre-Premium Opportunity Flow", async () => {
    await bidderdealerpage.BidderOpportunityPre_premium();
  });

  await test.step("2. Sign In with Existing Account", async () => {
    await addvinpage.ExistingAccount(); // existing account
  });

  await test.step("3. Fill Individual Details", async () => {
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

  await test.step("7. Upload Additional Documents", async () => {
    await bidderinvidualpage.AdditionalDocument();
  });

  await test.step("8. Creating Dealer account and Upload Dealer Documents", async () => {
    await bidderdealerpage.DealerDocument();
  });

  await test.step("9. Add Products", async () => {
    await bidderinvidualpage.AddProducts();
  });

  await test.step("10. Enter Card Details", async () => {
    await bidderinvidualpage.CardDetails();
  });

  await test.step("11. Complete Personal DocuSign", async () => {
    await bidderinvidualpage.PersonalDocuSign();
  });

  await test.step("12. View Bidder Opportunity", async () => {
    await bidderinvidualpage.ViewBidderOpportunity();
  });

});
