import{test} from '@playwright/test'
import { AddVinPage } from '../../Pages/AddVinPage'

test('CReating new account sign in and confirm email and Forgot password', async ({ page }) => {
  const addvinpage = new AddVinPage(page);

  await test.step("1. Open Consignment URL", async () => {
    await addvinpage.ConsignmentURL();
  });

  await test.step("2. Creating new account", async () => {
    await addvinpage.SignIn();
  });

  await test.step("3. Confirm Email", async () => {
    await addvinpage.ConfirmEmail();
  });
    await test.step("4. Forgot password and Reset the password and Sign In", async () => {
    await addvinpage.Forgotpassword();
  });
    await test.step("4. Logout", async () => {
    await addvinpage.LogOut();
  });
});
