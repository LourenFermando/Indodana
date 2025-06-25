import { Page, expect } from '@playwright/test';

export class Indodana{
    readonly page : Page;
    constructor(page: Page){
        this.page = page;
    }
    async Validation (Object) {
        await expect(this.page.locator(Object)).toBeVisible();
    }
    async input(Object,input){
        await this.page.locator(Object).fill(input);
    }
    async click(Object){
        await this.page.locator(Object).click();
    }
    async enable(Object){
        await expect(this.page.locator(Object)).toBeEnabled();
    }
}