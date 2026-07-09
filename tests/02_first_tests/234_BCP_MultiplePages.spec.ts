import { chromium } from 'playwright';

async function multiTabTest() {

    let browser = await chromium.launch({headless: false});
    let context = await browser.newContext();

    //Tab1
    let page1 = await context.newPage();
    await page1.goto("https://app.vwo.com/#login");
    console.log("Tab1: Dashboard");

    //Tab2 - same context, shares cookies with Tab1
    let page2 = await   context.newPage();
    await page2.goto("https://app.vwo.com/#dashboard");
    console.log("Tab2 : Settings");



}

multiTabTest