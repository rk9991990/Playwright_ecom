import { test } from "@playwright/test";

test("verify the title of the page", async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.waitForTimeout(2000);
});
