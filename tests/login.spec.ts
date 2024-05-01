import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { firefox, webkit, chromium } from 'playwright'

test('this is my 1st login test', async()=>{
    const browser:Browser = await firefox.launch({headless: false});
    const page:Page = await browser.newPage();
    await page.goto("https://www.saucedemo.com/");
  
    await expect(page).toHaveTitle("Swag Labs");
   
    const uName:Locator = page.locator('[data-test="username"]');
    const passWord:Locator = page.locator('[data-test="password"]');
    const loginButton:Locator = page.locator('[data-test="login-button"]');

    await uName.fill("standard_user");
    await passWord.fill("secret_sauce");

    await loginButton.click();


    const title = await page.title();
    console.log("home page title", title);
    await page.screenshot({path: 'homepage.jpg'});

    expect(title).toEqual('Swag Labs');
    browser.close();

});

test('this is my 2nd login test', async()=>{
    const browser:Browser = await firefox.launch({headless: false});
    const page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
  
    
    const uName:Locator = await page.locator('#input-email');
    const passWord:Locator = await page.locator('#input-password');
    const loginButton:Locator = await page.locator("[value='Login']");

    await uName.fill("bhanudas.com@gmail.com");
    await passWord.fill("playwright@123");

    await loginButton.click();


    const title = await page.title();
    console.log("home page title", title);
    await page.screenshot({path: 'homepage.jpg'});

    expect(title).toEqual('My Account');
    browser.close();

});
