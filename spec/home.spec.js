import {test, expect} from '@playwright/test';

test('should navigate to the about page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/about');
  // Find an element with the text 'About' and click on it
  await page.click('text=Home');
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/home/');


  await expect(page.getByText('Natasha Osborne').first()).toBeVisible();
  await expect(page.getByText('Full Stack Software Engineer')).toBeVisible();
  await expect(page.getByText('Based in Colorado, USA')).toBeVisible();
});
