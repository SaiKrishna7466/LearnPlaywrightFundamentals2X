import { test, expect } from '@playwright/test';

test("Verify the title", async ({page}) => {
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");
    //page = fixture (injected by playwright)
});

test.only('Verify the title2', async ({browser}) => {

    const Context = await browser.newContext();
const page = await Context.newPage();
await page.goto("https://www.instagram.com/?hl=en");
    // await page.goto("https://app.vwo.com");
    // await expect(page).toHaveTitle("Login - Wingify");
    //page = fixture (injected by playwright)
});