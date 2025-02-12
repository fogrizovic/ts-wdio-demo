import { expect } from '@wdio/globals'
import loginPage from "../pageobjects/login.page";
import headerComp from "../pageobjects/header.comp";
import dashboardPage from "../pageobjects/dashboard/dashboard.page";
import allureReporter from '@wdio/allure-reporter';

describe('Login tests', () => {

    beforeEach(async () => {
        await loginPage.open();
        allureReporter.addStep('opened LoginPage');
    });

    afterEach(async () => {
        await browser.reloadSession();
    });

    it('@smoke should go to Dashboard page when login with valid credentials', async () => {

        const credentials = {
            username: 'Admin',
            password: 'admin123'
        }

        await loginPage.doLogin(credentials.username, credentials.password);
        allureReporter.addStep('Entered credentials');

        await expect(headerComp.pageTitle).toHaveText('Dashboard')
        await expect(dashboardPage.timeAtWorkWidget.profilePicture).toExist()

    })

})
