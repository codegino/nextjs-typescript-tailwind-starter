import { test, expect } from '@playwright/test'

test('should navigate to the about page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')
  // Find an element with the text 'About' and click on it
  await page.click('text=About')
//   // The new url should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('/about')
//   // The new page should contain an h2 with "This is the about page"
  await expect(page.locator('h2')).toContainText('This is the about page')
})