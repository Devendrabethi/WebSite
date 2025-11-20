import{test} from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage'
import { AddMediaPage } from '../../Pages/AddMediaPage'
import { TitleDocument_Page } from '../../Pages/TitleDocument_Page'
import { ApplicationInfoPage } from '../../Pages/ApplicationInfoPage'
import { BusinessPage } from '../../Pages/BusinessPage'
import { DealerPage } from '../../Pages/DealerPage'
import { TrustPage } from '../../Pages/TrustPage'

test('Consignment Flow – Individual, Business, Dealer, Trust Applications', async ({ page }) => {

  const addvinpage = new AddVinPage(page);
  const addmediapage = new AddMediaPage(page);
  const titledocument_page = new TitleDocument_Page(page);
  const applicationinfopage = new ApplicationInfoPage(page);
  const businesspage = new BusinessPage(page);
  const dealerpage = new DealerPage(page);
  const trustpage = new TrustPage(page);

  // -------------------------------
  // 🌟 INDIVIDUAL APPLICATION
  // -------------------------------
  await test.step("1. Individual: Consignment", async () => {
    await addvinpage.ConsignmentURL();
  });

  await test.step("2. Individual: Creating new account", async () => {
    await addvinpage.SignIn();
  });

  // await test.step("Confirm Email", async () => {
  //   await addvinpage.ConfirmEmail();
  // });

  //  await test.step("Login", async () => {
  //   await addvinpage.LoginIn();
  // });

  await test.step("3. Individual: Enter Vehicle Details", async () => {
    await addvinpage.VehicleDetailsone();
    await addvinpage.PowerSource();
    await addvinpage.VehicleDetailstwo();
    await addvinpage.Mileage();
    await addvinpage.VehicleDescp();
  });

  await test.step("4. Individual: Upload Photos", async () => {
    // await addmediapage.MainPhotos();
    await addmediapage.AdditionalPhotos();
  });

  await test.step("5. Individual: Upload Vehicle Documents", async () => {
    await titledocument_page.VehicleDocument();
  });

  await test.step("6. Individual: Finish Application & Review", async () => {
    await applicationinfopage.FinishApplication();
    await applicationinfopage.ReviewApp();
  });

  // -------------------------------
  // 🌟 BUSINESS APPLICATION
  // -------------------------------
  await test.step("7. Business: Start Another Application With Business", async () => {
    await businesspage.StartAnotherApp();
  });

  await test.step("8. Business: Enter Vehicle Details", async () => {
    await addvinpage.VehicleDetailsone();
    await addvinpage.PowerSourceHyBrid();
    await addvinpage.Mileage();
    await addvinpage.VehicleDescp();
  });

  await test.step("9. Business: Upload Photos", async () => {
    // await addmediapage.MainPhotos();
    await addmediapage.AdditionalPhotos();
  });

  await test.step("10. Business: Creating Business account and Upload Vehicle Documents", async () => {
    await businesspage.AlreadyBusinessVehicleDocument();
  });

  await test.step("11. Business: Finish Application & Review", async () => {
    await applicationinfopage.FinishApplication();
    await applicationinfopage.ReviewApp();
  });

  // -------------------------------
  // 🌟 DEALER APPLICATION
  // -------------------------------
  await test.step("12. Dealer: Start Another Application With Dealer", async () => {
    await businesspage.StartAnotherApp();
  });

  await test.step("13. Dealer: Enter Vehicle Details", async () => {
    await addvinpage.VehicleDetailsone();
    await addvinpage.PowerSourceElectric();
    await addvinpage.Mileage();
    await addvinpage.VehicleDescp();
  });

  await test.step("14. Dealer: Upload Photos", async () => {
    // await addmediapage.MainPhotos();
    await addmediapage.AdditionalPhotos();
  });

  await test.step("15. Dealer: Creating Dealer account and Upload Vehicle Documents", async () => {
    await dealerpage.AlreadyDealerVehicleDocument();
  });

  await test.step("16. Dealer: Finish Application & Review", async () => {
    await applicationinfopage.FinishApplication();
    await applicationinfopage.ReviewApp();
  });

  // -------------------------------
  // 🌟 TRUST APPLICATION
  // -------------------------------
  await test.step("17. Trust: Start Another Application With Trust", async () => {
    await businesspage.StartAnotherApp();
  });

  await test.step("18. Trust: Enter Vehicle Details", async () => {
    await addvinpage.VehicleDetailsone();
    await addvinpage.PowerSourceDiesel();
    await addvinpage.Mileage();
    await addvinpage.VehicleDescp();
  });

  await test.step("19. Trust: Upload Photos", async () => {
    // await addmediapage.MainPhotos();
    await addmediapage.AdditionalPhotos();
  });

  await test.step("20. Trust: Upload Vehicle Documents", async () => {
    await trustpage.AlreadyTrustVehicleDocument();
  });

  await test.step("21. Trust: Finish Application & Review", async () => {
    await applicationinfopage.FinishApplication();
    await applicationinfopage.ReviewApp();
  });

  await test.step("22. Trust: View Submission & Dashboard", async () => {
    await applicationinfopage.ViewMySubmission();
    await applicationinfopage.ConsignmentDashboardwithDocument();
  });

});
