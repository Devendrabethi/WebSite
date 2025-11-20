import{test} from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage'
import { AddMediaPage } from '../../Pages/AddMediaPage'
import { ApplicationInfoPage } from '../../Pages/ApplicationInfoPage'
import { DealerPage } from '../../Pages/DealerPage'
import { TrustPage } from '../../Pages/TrustPage'

test('Creating Dealer Consignment without documents on flow and uploading documents in dashboard', async ({ page }) => {

  const addvinpage = new AddVinPage(page);
  const addmediapage = new AddMediaPage(page);
  const applicationinfopage = new ApplicationInfoPage(page);
  const dealerpage = new DealerPage(page);

  await test.step("1. Open Consignment URL", async () => {
    await addvinpage.ConsignmentURL();
  });

  await test.step("2. Sign In and creating new account", async () => {
    await addvinpage.SignIn();
  });

  await test.step("3. Enter Vehicle Details (Part 1)", async () => {
    await addvinpage.VehicleDetailsone();
  });

  await test.step("4. Select Power Source (Electric)", async () => {
    await addvinpage.PowerSourceElectric();
  });

  await test.step("5. Enter Mileage", async () => {
    await addvinpage.Mileage();
  });

  await test.step("6. Enter Vehicle Description", async () => {
    await addvinpage.VehicleDescp();
  });

  await test.step("7. Upload Additional Photos", async () => {
    await addmediapage.AdditionalPhotos();
  });

  await test.step("8. Creating Dealer account and Skip Dealer Documents (Upload from Dashboard)", async () => {
    await dealerpage.DealerWithoutDocUploadingfromDashboard();
  });

  await test.step("9. Finish Application", async () => {
    await applicationinfopage.FinishApplication();
  });

  await test.step("10. Review Application", async () => {
    await applicationinfopage.ReviewApp();
  });

  await test.step("11. View Submission", async () => {
    await applicationinfopage.ViewMySubmission();
  });

  await test.step("12. Open Consignment Dashboard Without Documents", async () => {
    await applicationinfopage.ConsignmentDashboardwithoutDocument();
  });

});
