import { test, expect } from "@playwright/test";

test("homepage", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Hacktoberfest Museum/);
  await expect(page.getByText("React Useless")).toBeVisible();
});

test("search by title", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("search").fill("deploy");
  await expect(page.getByText("Deploydeemai")).toBeVisible();
  await expect(page.getByText("React Useless")).not.toBeVisible();
});

test("search by founder", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("search").fill("tinnaphat");
  await expect(page.getByText("MukPakPak")).toBeVisible();
  await expect(page.getByText("React Useless")).not.toBeVisible();
});

test("search by topic", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("search").fill("vue");
  await expect(page.getByText("Torpleng")).toBeVisible();
  await expect(page.getByText("React Useless")).not.toBeVisible();
});
