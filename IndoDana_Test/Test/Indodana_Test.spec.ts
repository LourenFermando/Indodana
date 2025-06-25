import { Page, test, expect, BrowserContext, Browser } from '@playwright/test';
import { Indodana } from '../PageObject/Indodana';

let page: Page;
let browserContext: BrowserContext;
let funindondana: Indodana;

test.describe('Indodana_testing automation', () => {
  test.beforeAll(async ({ browser }: { browser: Browser }) => {
    browserContext = await browser.newContext();
    page = await browserContext.newPage();
    funindondana = new Indodana(page); // Correct initialization

    page.on('popup', async popup => {
      await popup.waitForLoadState();
    });
    await page.goto('https://www.cermati.com/app/gabung');
  });

  test.afterAll(async () => {
    //await browserContext.close();
  });
  
  test('Check all attributes', async () => {
    await funindondana.Validation('//img[@alt="cermati.com"]');
    await funindondana.Validation('//div[@id="top-beranda-logo"]');
    await funindondana.Validation('//a[@href="/app/products"]');
    await funindondana.Validation('//a[@href="/app/me"]');
    await funindondana.Validation('//a[@href="/app/login?target=/app/gabung"]');
    await funindondana.Validation('//a[@href="/app/gabung?target=/app/gabung"]');
    await funindondana.Validation('//button[@aria-label="Buka Pencarian"]');
    await funindondana.Validation('//input[@id="mobilePhone"]');
    await funindondana.Validation('//input[@id="email"]');
    await funindondana.Validation('//input[@id="firstName"]');
    await funindondana.Validation('//input[@id="lastName"]');
    await funindondana.Validation('//span[contains(@class, "TermsAndConditions")]');
    await funindondana.Validation('//button[@data-button-name="register-new"]');
  });
  test('input', async () => {
    await funindondana.input('//input[@id="mobilePhone"]','08182271833')
    await funindondana.input('//input[@id="email"]','Louren_Indodana@gmail.com');
    await funindondana.input('//input[@id="firstName"]','Louren');
    await funindondana.input('//input[@id="lastName"]','Fermando');
    await funindondana.enable('//button[@data-button-name="register-new"]'); 
    await funindondana.click('//button[@data-button-name="register-new"]'); 
    await page.waitForTimeout(10000);
  });
});