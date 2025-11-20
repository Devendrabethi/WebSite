import{test} from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage'
import { BidderInvidualPage } from '../../Pages/BidderInvidualPage'

test('Creating Bidder Opportunity For Individual With Regular Bidder Mobilia Package with DocuSign', async ({ page }) => {

  const addvinpage = new AddVinPage(page);
  const bidderinvidualpage = new BidderInvidualPage(page);

  await test.step("1. Start Regular Bidder Mobilia Opportunity", async () => {
    await bidderinvidualpage.BidderOpportunityRegularBidderMobilia();
  });

  await test.step("2. Sign In and creating new account", async () => {
    await addvinpage.SignIn();
  });

  await test.step("3. Enter Individual Details", async () => {
    await bidderinvidualpage.IndividualDetails();
  });

  await test.step("4. Complete Individual Registration", async () => {
    await bidderinvidualpage.IndividualRegistration();
  });

  await test.step("5. Enter Regular Bidder Mobilia Address Details", async () => {
    await bidderinvidualpage.RegularBidderMobiliaAddressDetails();
  });

  await test.step("6. Set Desired Bid Limit", async () => {
    await bidderinvidualpage.DesiredBidLimit();
  });

  await test.step("7. Enter Card Details", async () => {
    await bidderinvidualpage.CardDetails();
  });

  await test.step("8. Complete DocuSign", async () => {
    await bidderinvidualpage.PersonalDocuSign();
  });

  await test.step("9. View Created Bidder Opportunity", async () => {
    await bidderinvidualpage.ViewBidderOpportunity();
  });

});
