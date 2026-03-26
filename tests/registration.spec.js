import { expect, test, Locator } from "@playwright/test";

//due to this my code is running locally but not running in ci/cd pipeline
// test("verify the title of the page", async ({ page }) => {
//   await page.goto("http://localhost:4200/");
//   await page.locator("//a[normalize-space()='About-Us']").click();
//   await expect(
//     page.locator("//p[normalize-space()='contact-us works!']"),
//   ).toBeVisible();
// });

// test("verify registraion page", async ({ page }) => {
//   await page.goto("https://demowebshop.tricentis.com/");
//   await page.locator("//a[normalize-space()='Register']").click();
//   await expect(page).toHaveTitle("Demo Web Shop. Register");
// });

// test.describe("register into the page @smoke ", () => {
//   test.beforeAll(async ({ page }) => {
//     await page.goto("https://demowebshop.tricentis.com/");
//     await page.locator("//a[normalize-space()='Register']").click();
//     await expect(page).toHaveTitle("Demo Web Shop. Register");
//   });

//   test("verify radio button", async ({ page }) => {
//     // Select the Male radio button
//     const male = page.locator("#gender-male");
//     await male.check();
//     // Assert it is checked
//     await expect(male).toBeChecked();
//     await page.waitForTimeout(4000);
//     const female = page.locator("#gender-female");
//     await female.check();
//     expect(female).toBeChecked();
//     await page.waitForTimeout(3000);
//   });

//   test("verify first and last name", async ({ page }) => {
//     const fname = page.locator("#FirstName");
//     const lname = page.locator("#LastName");
//     fname.fill("Ravi");
//     lname.fill("Kumar");
//     await expect(fname).toHaveValue("Ravi");
//     await expect(lname).toHaveValue("Kumar");
//   });

//   test("verify email field", async ({ page }) => {
//     const email = page.locator("#Email");
//     await email.fill("ravikumarlodhi787@gmail.com");
//     await expect(email).toHaveValue("ravikumarlodhi787@gmail.com");
//   });

//   test("verify password and confirm password field", async ({ page }) => {
//     const password = page.locator("#Password");
//     const cPassword = page.locator("#ConfirmPassword");
//     password.fill("Rr@1029384756");
//     cPassword.fill("Rr@1029384756");
//     await expect(password).toHaveValue("Rr@1029384756");
//     await expect(cPassword).toHaveValue("Rr@1029384756");
//   });

//   test("verify registration button", async ({ page }) => {
//     await page.locator("#register-button").click();
//   });
// });

test("verify registraion page @smoke", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  await page.locator("//a[normalize-space()='Register']").click();
  await expect(page).toHaveTitle("Demo Web Shop. Register");
});

test("register into the page @smoke ", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  await page.locator("//a[normalize-space()='Register']").click();
  await expect(page).toHaveTitle("Demo Web Shop. Register");

  // Select the Male radio button
  const male = page.locator("#gender-male");
  await male.check();
  // Assert it is checked
  await expect(male).toBeChecked();
  await page.waitForTimeout(4000);
  const female = page.locator("#gender-female");
  await female.check();
  expect(female).toBeChecked();
  await page.waitForTimeout(3000);
  const fname = page.locator("#FirstName");
  fname.fill("Ravi");
  await expect(fname).toHaveValue("Ravi");
  const lname = page.locator("#LastName");
  lname.fill("Kumar");
  await expect(lname).toHaveValue("Kumar");
  const email = page.locator("#Email");
  await email.fill("ravikumar@yopmail.com");
  await expect(email).toHaveValue("ravikumar@yopmail.com");
  const password = page.locator("#Password");
  password.fill("Rr@1029384756");
  await expect(password).toHaveValue("Rr@1029384756");
  const cPassword = page.locator("#ConfirmPassword");
  cPassword.fill("Rr@1029384756");
  await expect(cPassword).toHaveValue("Rr@1029384756");
  await page.locator("#register-button").click();
  await expect(page).toHaveTitle("Demo Web Shop. Register");
  await page.waitForTimeout(3000);

  //so issue was in locator
  // const loggedMsg = page.locator(
  //   "div[class='validation-summary-errors'] ul-li",
  // );
  const loggedMsg = page.locator("div.validation-summary-errors ul li");
  console.log("hi");
  const successMsg = page.locator("//div[@class='result']");
  console.log(successMsg);

  if (await loggedMsg.isVisible()) {
    await expect(loggedMsg).toContainText("already exists");
  } else {
    await expect(successMsg).toContainText("registration completed");
  }

  //we can execute using try-catch
  // const loggedMsg = page.locator("div.validation-summary-errors ul li");

  // const successMsg = page.locator("div.result");

  // try {
  //   await expect(loggedMsg).toContainText("already exists", { timeout: 5000 });
  // } catch {
  //   await expect(successMsg).toContainText("registration completed");
  // }
});
