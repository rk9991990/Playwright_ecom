import { test, expect } from "@playwright/test";

test("verify the title of the page", async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.locator("//a[normalize-space()='About-Us']").click();
  await expect(page).toHaveURL("http://localhost:4200/about-us");
});
