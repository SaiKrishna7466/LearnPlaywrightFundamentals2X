import { test, expect } from '@playwright/test';

test("Verify the title", async ({page}) => {
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");
    //page = fixture (injected by playwright)
});

//Skip test
test.skip('skipped test', async ({ page }) => {
    //This test is skipped
});

//Only run this test
test.only('focused test', async ({ page }) => {
    //Only this test will run
});

// Mark as failing
test.fail(' epected to fail ', async ({ page }) => {
    //This test is expected to fail
});

//Slow test (3x timeout)
test('slow test', async ({ page }) => {
    test.slow();
    //This test is slow
});

//Conditional Skip
test('conditional', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Not supported in firefox');
});