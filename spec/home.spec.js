import {test, expect} from '@playwright/test';

test('should render the home page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/');

  await expect(page.getByText('Natasha Osborne').first()).toBeVisible();
});
