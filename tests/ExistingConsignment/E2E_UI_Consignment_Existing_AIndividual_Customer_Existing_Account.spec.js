import{test} from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage'
import { AddMediaPage } from '../../Pages/AddMediaPage'
import { TitleDocument_Page } from '../../Pages/TitleDocument_Page'
import { ApplicationInfoPage } from '../../Pages/ApplicationInfoPage'

test('Existing account and creating Consignment with Individual Flow', async ({ page }) => {

  const addvinpage = new AddVinPage(page);
  const addmediapage = new AddMediaPage(page);
  const titledocument_page = new TitleDocument_Page(page);
  const applicationinfopage = new ApplicationInfoPage(page);

  await test.step("1. Open Consignment URL", async () => {
    await addvinpage.ConsignmentURL();
  });

  await test.step("2. Sign In with Existing Account", async () => {
    await addvinpage.ExistingAccount(); // existing account
  });

  await test.step("3. Fill Vehicle Details - Part 1", async () => {
    await addvinpage.VehicleDetailsone();
    await addvinpage.PowerSource();
  });

  await test.step("4. Fill Vehicle Details - Part 2", async () => {
    await addvinpage.VehicleDetailstwo();
    await addvinpage.Mileage();
    await addvinpage.VehicleDescp();
  });

  await test.step("5. Upload Additional Photos", async () => {
    // await addmediapage.MainPhotos(); // optional
    await addmediapage.AdditionalPhotos();
  });

  await test.step("6. Upload Existing Vehicle Documents", async () => {
    await titledocument_page.ExistingVehicleDocument();
  });

  await test.step("7. Finish Application", async () => {
    await applicationinfopage.FinishApplication();
  });

  await test.step("8. Review Application", async () => {
    await applicationinfopage.ReviewApp();
  });

  await test.step("9. View My Submission", async () => {
    await applicationinfopage.ViewMySubmission();
  });

  await test.step("10. Verify Consignment Dashboard with Document", async () => {
    await applicationinfopage.ConsignmentDashboardwithDocument();
  });

});
