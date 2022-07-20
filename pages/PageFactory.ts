import { BasePage } from "./BasePage";
import { HomePage } from "./HomePage";
import { WebDriver } from "selenium-webdriver";
import { CatalogPage } from "./CatalogPage";

export class PageFactory {
    static getPage(driver: WebDriver, pageName?: string) {
        switch (pageName) {
            case "BasePage":
                return new BasePage(driver);
            case "HomePage":
                return new HomePage(driver);
            case "CatalogPage":
                return new CatalogPage(driver);
            default:
                return new BasePage(driver);
        }
    }
}
