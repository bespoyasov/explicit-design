import { test, expect } from "@playwright/test";

test("renders converter form", async ({ page }) => {
  await page.goto("/");
  const form = page.getByRole("form");
  expect(form).toBeDefined();
});

test("refresh rates use case", async ({ page }) => {
  const valueInitial = /1 RPC = 0.3 IMC/;
  const valueExpected = /1 RPC = 0.98 IMC/;

  await page.goto("/");
  expect(page.getByText(valueInitial)).toBeDefined();

  const button = page.getByRole("button");
  await button.click();
  await expect(button).toBeDisabled();

  await page.waitForResponse("**/rates");
  expect(page.getByText(valueExpected)).toBeDefined();
});

// ...And so on.
//    Basically, you'd check all the core user scenarios
//    to see how the application operates in an environment
//    that is very close to the production one.
//
// You might need to specify behavior
// for different screens, devices, user groups etc
// but that's a topic for a whole another post =)
