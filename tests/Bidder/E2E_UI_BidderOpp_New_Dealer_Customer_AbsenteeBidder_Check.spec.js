import{test} from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage'
import { BidderInvidualPage } from '../../Pages/BidderInvidualPage'
import { BidderDealerPage } from '../../Pages/BidderDealerPage'

test('Creating Bidder Opportunity For Dealer With Absentee Package', async ({ page }) => {

  const addvinpage = new AddVinPage(page);
  const bidderinvidualpage = new BidderInvidualPage(page);
  const bidderdealerpage = new BidderDealerPage(page);

  await test.step("1. Start Dealer Absentee Package Opportunity", async () => {
    await bidderdealerpage.BidderOpportunityAbsentee();
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

  await test.step("3. Confirm Absentee Package Selection", async () => {
    await bidderdealerpage.BidderOpportunityAbsenteeyes();
  });

  await test.step("4. Enter Individual Details", async () => {
    await bidderinvidualpage.IndividualDetails();
  });

  await test.step("5. Complete Dealer Registration", async () => {
    await bidderdealerpage.DealerRegistration();
  });

  await test.step("6. Enter Address Details", async () => {
    await bidderinvidualpage.AddressDetails();
  });

  await test.step("7. Set Desired Bid Limit / CC Deposit", async () => {
    await bidderdealerpage.CCDepositeDesiredBidLimit();
  });

  await test.step("8. Upload Additional Documents (Individual)", async () => {
    await bidderinvidualpage.AdditionalDocument();
  });

  await test.step("9. Upload Dealer Documents", async () => {
    await bidderdealerpage.DealerDocument();
  });

  // If AddProducts is not needed for Dealer Absentee, leave it commented
  // await test.step("X. Add Products", async () => {
  //   await bidderinvidualpage.AddProducts();
  // });

  await test.step("10. Enter Card Details (Individual)", async () => {
    await bidderinvidualpage.CardDetails();
  });

  await test.step("11. Complete Absentee DocuSign", async () => {
    await bidderinvidualpage.AbsenteeDocuSign();
  });

  await test.step("12. Enter Dealer CC Deposit Card Details", async () => {
    await bidderdealerpage.CCDepositeCardDetails();
  });

});
