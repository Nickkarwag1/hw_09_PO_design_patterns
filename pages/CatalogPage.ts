import { BasePage } from "./BasePage";
import { By, until, WebDriver } from "selenium-webdriver";

export class CatalogPage extends BasePage {
    constructor(protected driver: WebDriver) {
        super(driver);
    }

    async clickMidMenu(selector: string) {
        const middleMenu = await this.driver.findElement(By.css(selector));
        await middleMenu.click();
    }

    async clickLeftSideMenu(chapterName: string) {
        const leftMenu = await this.driver.findElement(
            By.xpath(`//div[contains(@class, 'list__aside-title') and normalize-space(text()) = '${chapterName}']`),
        );
        await this.driver.wait(until.elementIsVisible(leftMenu));
        await leftMenu.click();
    }

    async clickProduct(selector: string) {
        const product = await this.driver.findElement(By.css(selector));
        await this.driver.wait(until.elementIsVisible(product));
        await product.click();
    }

    async getTitleProduct(selector: string) {
        const titleProduct = await this.driver.findElement(By.css(selector));
        await this.driver.wait(until.elementIsVisible(titleProduct));
        return this.driver.getTitle();
    }
}
