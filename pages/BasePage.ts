import { WebDriver } from "selenium-webdriver";

export class BasePage {
    constructor(protected driver: WebDriver) {}

    async visitPage(url: string) {
        await this.driver.manage().window().maximize();
        await this.driver.get(url);
    }

    async getTitle() {
        return await this.driver.getTitle();
    }

    async getWindowHandle() {
        await this.driver.getWindowHandle();
    }

    async closeBrowser() {
        await this.driver.quit();
    }
}
