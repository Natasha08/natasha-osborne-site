import {test, expect} from '@playwright/test';

test('sshould have an about section', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/');
  // Find an element with the text 'About' and click on it
  await expect(page.getByText('I love building software!')).toBeVisible();

});
