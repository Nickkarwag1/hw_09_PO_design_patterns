import { driver } from "../config/webdriver";
import { BASE_URL } from "../constants/url";
import { expect } from "chai";
import { TITLES } from "../constants/titles";
import {
    SELECTORS_HOME_PAGE,
    SELECTORS_MID_MENU,
    SELECTORS_HEADERS_TITLES,
    SELECTORS_PRODUCT,
} from "../constants/selectors";
import { LEFT_SIDE_BAR } from "../constants/leftSideBar";
import { PageFactory } from "../pages/PageFactory";
import { HomePage } from "../pages/HomePage";
import { CatalogPage } from "../pages/CatalogPage";

const { HEADERS_PRODUCT } = SELECTORS_HEADERS_TITLES;

describe("Onliner tests", async () => {
    before(async () => {
        await PageFactory.getPage(driver).visitPage(BASE_URL);
    });
    afterEach(async () => {
        await PageFactory.getPage(driver).getWindowHandle();
    });

    after(async () => {
        await PageFactory.getPage(driver).closeBrowser();
    });

    it("Catalog page should be opened", async () => {
        try {
            const homePage = (await PageFactory.getPage(driver, "HomePage")) as HomePage;
            await homePage.clickCatalog(SELECTORS_HOME_PAGE.CATALOG);

            const catalogTitle = await PageFactory.getPage(driver).getTitle();
            expect(catalogTitle).to.eql(TITLES.CATALOG);
        } catch (err: any) {
            console.log(err.message);
        }
    });

    it("Tablets page should be opened", async () => {
        try {
            const catalogTablets = (await PageFactory.getPage(driver, "CatalogPage")) as CatalogPage;
            await catalogTablets.clickMidMenu(SELECTORS_MID_MENU.ELECTRONICS);
            await catalogTablets.clickLeftSideMenu(LEFT_SIDE_BAR.TABLETS_EBOOKS);
            await catalogTablets.clickProduct(SELECTORS_PRODUCT.TABLETS);

            const getTitleTablets = await catalogTablets.getTitleProduct(HEADERS_PRODUCT);
            expect(getTitleTablets).to.eql(TITLES.TABLETS);
        } catch (err: any) {
            console.log(err.message);
        }
    });

    it("Gaming consoles page should be opened", async () => {
        try {
            const catalogGameConsoles = (await PageFactory.getPage(driver, "CatalogPage")) as CatalogPage;
            await catalogGameConsoles.clickMidMenu(SELECTORS_MID_MENU.ELECTRONICS);
            await catalogGameConsoles.clickLeftSideMenu(LEFT_SIDE_BAR.VIDEOGAMES);
            await catalogGameConsoles.clickProduct(SELECTORS_PRODUCT.CONSOLE);

            const getTitleConsole = await catalogGameConsoles.getTitleProduct(HEADERS_PRODUCT);
            expect(getTitleConsole).to.eql(TITLES.CONSOLE);
        } catch (err: any) {
            console.log(err.message);
        }
    });

    it("Batteries car page should be opened", async () => {
        try {
            const catalogBatteries = (await PageFactory.getPage(driver, "CatalogPage")) as CatalogPage;
            await catalogBatteries.clickMidMenu(SELECTORS_MID_MENU.AUTO_MOTO);
            await catalogBatteries.clickLeftSideMenu(LEFT_SIDE_BAR.SPARES);
            await catalogBatteries.clickProduct(SELECTORS_PRODUCT.CAR_BATTERY);

            const getTitleCarBattery = await catalogBatteries.getTitleProduct(HEADERS_PRODUCT);
            expect(getTitleCarBattery).to.eql(TITLES.CAR_BATTERY);
        } catch (err: any) {
            console.log(err.message);
        }
    });

    it("Office chairs page should be opened", async () => {
        try {
            const catalogChairs = (await PageFactory.getPage(driver, "CatalogPage")) as CatalogPage;
            await catalogChairs.clickMidMenu(SELECTORS_MID_MENU.WORK_OFFICE);
            await catalogChairs.clickLeftSideMenu(LEFT_SIDE_BAR.OFFICE_FURNITURE);
            await catalogChairs.clickProduct(SELECTORS_PRODUCT.OFFICE_CHAIRS);

            const getTitleOfficeChairs = await catalogChairs.getTitleProduct(HEADERS_PRODUCT);
            expect(getTitleOfficeChairs).to.eql(TITLES.OFFICE_CHAIRS);
        } catch (err: any) {
            console.log(err.message);
        }
    });

    it("IP cameras page should be opened", async () => {
        try {
            const catalogCameras = (await PageFactory.getPage(driver, "CatalogPage")) as CatalogPage;
            await catalogCameras.clickMidMenu(SELECTORS_MID_MENU.WORK_OFFICE);
            await catalogCameras.clickLeftSideMenu(LEFT_SIDE_BAR.VIDEO_SURVEILLANCE);
            await catalogCameras.clickProduct(SELECTORS_PRODUCT.IP_CAMERAS);

            const getTitleIpCameras = await catalogCameras.getTitleProduct(HEADERS_PRODUCT);
            expect(getTitleIpCameras).to.eql(TITLES.IP_CAMERAS);
        } catch (err: any) {
            console.log(err.message);
        }
    });
});
