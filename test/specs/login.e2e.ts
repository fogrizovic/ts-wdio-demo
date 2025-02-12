import { expect } from '@wdio/globals'
import loginPage from "../pageobjects/login.page";
import headerComp from "../pageobjects/header.comp";
import dashboardPage from "../pageobjects/dashboard/dashboard.page";

describe('Login tests', () => {

    beforeEach(async () => {
        await loginPage.open();
    });

    afterEach(async () => {
        await browser.reloadSession();
    });

    it('should go to Dashboard page when login with valid credentials', async () => {

        const credentials = {
            username: 'Admin',
            password: 'admin123'
        }

        await loginPage.doLogin(credentials.username, credentials.password);

        await expect(headerComp.pageTitle).toHaveText('Dashboard')
        await expect(dashboardPage.timeAtWorkWidget.profilePicture).toExist()

    })

    it('should display error message when login with invalid credentials', async () => {

        const credentials = {
            username: 'Admin',
            password: 'aaaa'
        }

        await loginPage.doLogin(credentials.username, credentials.password);

        await expect(loginPage.errorMessage).toHaveText('Invalid credentials')

    })

})
