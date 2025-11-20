import{test} from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage'
import { AddMediaPage } from '../../Pages/AddMediaPage'
import { TitleDocument_Page } from '../../Pages/TitleDocument_Page'
import { ApplicationInfoPage } from '../../Pages/ApplicationInfoPage'

test('Consignment Individual Flow', async ({ page }) => {

  const addvinpage = new AddVinPage(page);
  const addmediapage = new AddMediaPage(page);
  const titledocument_page = new TitleDocument_Page(page);
  const applicationinfopage = new ApplicationInfoPage(page);

  await test.step("1. Open Consignment URL", async () => {
    await addvinpage.ConsignmentURL();
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

  await test.step("3. Enter Vehicle Details Part 1", async () => {
    await addvinpage.VehicleDetailsone();
  });

  await test.step("4. Select Power Source", async () => {
    await addvinpage.PowerSource();
  });

  await test.step("5. Enter Vehicle Details Part 2", async () => {
    await addvinpage.VehicleDetailstwo();
  });

  await test.step("6. Enter Mileage", async () => {
    await addvinpage.Mileage();
  });

  await test.step("7. Enter Vehicle Description", async () => {
    await addvinpage.VehicleDescp();
  });

  await test.step("8. Upload Additional Photos", async () => {
    await addmediapage.AdditionalPhotos();
  });

  await test.step("9. Upload Vehicle Documents", async () => {
    await titledocument_page.VehicleDocument();
  });

  await test.step("10. Finish Application", async () => {
    await applicationinfopage.FinishApplication();
  });

  await test.step("11. Review Application", async () => {
    await applicationinfopage.ReviewApp();
  });

  await test.step("12. View Submission", async () => {
    await applicationinfopage.ViewMySubmission();
  });

  await test.step("13. Open Consignment Dashboard (With Documents)", async () => {
    await applicationinfopage.ConsignmentDashboardwithDocument();
  });

});
