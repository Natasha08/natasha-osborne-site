import {test, expect} from '@playwright/test';

test('should render the home page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/home/');

  await expect(page.getByText('Natasha Osborne').first()).toBeVisible();
  await expect(page.getByText('Based in Colorado, USA')).toBeVisible();
});
