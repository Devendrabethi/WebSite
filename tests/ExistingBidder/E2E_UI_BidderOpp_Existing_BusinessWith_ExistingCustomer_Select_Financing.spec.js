import{test} from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage'
import { BidderInvidualPage } from '../../Pages/BidderInvidualPage'
import { BidderBusinessPage } from '../../Pages/BidderBusinessPage'

test('Existing account and Creating Bidder Opportunity For Business With Select Package', async ({ page }) => {

  const addvinpage = new AddVinPage(page);
  const bidderinvidualpage = new BidderInvidualPage(page);
  const bidderbusinesspage = new BidderBusinessPage(page);

  await test.step("1. Start Business Select Opportunity Flow", async () => {
    await bidderbusinesspage.BidderOpportunitySelect();
  });

  await test.step("2. Sign In with Existing Account", async () => {
    await addvinpage.ExistingAccount(); // existing account
  });

  await test.step("3. Fill Individual Details", async () => {
    await bidderinvidualpage.IndividualDetails();
  });

  await test.step("4. Complete Business Registration", async () => {
    await bidderbusinesspage.BusinessRegistration();
  });

  await test.step("5. Enter Address Details", async () => {
    await bidderinvidualpage.AddressDetails();
  });

  await test.step("6. Set Desired Bid Limit", async () => {
    await bidderbusinesspage.DesiredBidLimit();
  });

  await test.step("7. Upload Additional Documents", async () => {
    await bidderinvidualpage.AdditionalDocument();
  });

  await test.step("8. Creating business account and Upload Business Documents", async () => {
    await bidderbusinesspage.BusinessDocument();
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
