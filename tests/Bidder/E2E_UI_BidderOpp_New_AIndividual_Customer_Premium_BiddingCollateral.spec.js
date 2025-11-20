import{test} from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage'
import { BidderInvidualPage } from '../../Pages/BidderInvidualPage'

test(
  'Creating Bidder Opportunity For Individual With Premium Package with DocuSign',
  async ({ page }) => {

    const addvinpage = new AddVinPage(page);
    const bidderinvidualpage = new BidderInvidualPage(page);

    await test.step("1. Start Premium Opportunity Flow", async () => {
      await bidderinvidualpage.BidderOpportunityPremium();
    });

    await test.step("2. Creating new account", async () => {
      await addvinpage.SignIn();
    });

    await test.step("3. Fill Individual Details", async () => {
      await bidderinvidualpage.IndividualDetails();
    });

    await test.step("4. Complete Registration", async () => {
      await bidderinvidualpage.IndividualRegistration();
    });

    await test.step("5. Enter Address Details", async () => {
      await bidderinvidualpage.AddressDetails();
    });

    await test.step("6. Desired Bid Limit", async () => {
      await bidderinvidualpage.DesiredBidLimit();
    });

    await test.step("7. Upload Additional Documents", async () => {
      await bidderinvidualpage.AdditionalDocument();
    });

    await test.step("8. Add Products", async () => {
      await bidderinvidualpage.AddProducts();
    });

    await test.step("9. Enter Card Details", async () => {
      await bidderinvidualpage.CardDetails();
    });

    await test.step("10. Complete DocuSign", async () => {
      await bidderinvidualpage.PersonalDocuSign();
    });

    await test.step("11. View Opportunity", async () => {
      await bidderinvidualpage.ViewBidderOpportunity();
    });

});
