import { By, until, WebDriver, WebElement } from "selenium-webdriver";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    constructor(protected driver: WebDriver) {
        super(driver);
    }

    async clickCatalog(selector: string) {
        const elementCatalog: WebElement = await this.driver.findElement(By.css(selector));
        await this.driver.wait(until.elementIsVisible(elementCatalog));
        await elementCatalog.click();
    }
}
