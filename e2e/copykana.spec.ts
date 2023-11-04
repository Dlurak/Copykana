import { test, expect } from "@playwright/test";

test("homepage exists", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Copykana");
});
