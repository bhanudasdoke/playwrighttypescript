import {test, expect, Browser, Page, Locator} from '@playwright/test';
import path from 'path';
import {chromium, firefox} from 'playwright';

test('1st testcase', async()=>{

   const browser:Browser = await chromium.launch({headless: false});
   const page:Page = await browser.newPage();
   await page.goto("https://www.saucedemo.com/");
   
   const loginName:Locator = await page.locator('[id="user-name"]');
   const password:Locator = await page.locator('[id="password"]');
   const loginbutton:Locator = await page.locator('[id="login-button"]');

   await loginName.fill("standard_user");
   await password.fill("secret_sauce");
   await loginbutton.click();

   const title = page.title();
   console.log("title is", title);
   await page.screenshot({path: 'screenshot1.jpg'});

});

test('this is 2nd test', async()=>{
const browser:Browser = await firefox.launch({headless: false});
const page:Page = await browser.newPage();
await page.goto ("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

const loginID:Locator = await page.locator("#input-email");
const passID:Locator = await page.locator("#input-password");
const loginB:Locator = await page.locator('[value="Login"]');

await loginID.fill("bhanudas.com@gmail.com");
await passID.fill("playwright@123");
await loginB.click();

const title = await page.title();
console.log("home page title is", title);
await page.screenshot({path: 'newscree.png'});
expect(title).toEqual("My Account");

});