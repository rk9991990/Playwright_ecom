import { expect, test } from "@playwright/test";

test("verify the title of the page", async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.locator("//a[normalize-space()='About-Us']").click();
  await expect(
    page.locator("//p[normalize-space()='contact-us works!']"),
  ).toBeVisible();
});
