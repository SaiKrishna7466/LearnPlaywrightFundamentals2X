import { chromium } from 'playwright';

async function  multiUsertest() {

    let browser = await chromium.launch({headless : false });

    //Admin 
    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();
    await adminPage.goto("https://app.vwo.com/login");
    console.log("Admin : on Login Page");

    //viewer
    let viewerContext = await browser.newContext();
    let viewerPage = await viewerContext.newPage();
    await viewerPage.goto("https://app.vwo.com/login");
    console.log("Viewer : on Login Page");

    await adminContext.close();
    await viewerContext.close();
    await browser.close();


}

multiUsertest();