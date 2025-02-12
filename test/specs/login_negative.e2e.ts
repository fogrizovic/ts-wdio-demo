import { expect } from '@wdio/globals'
import loginPage from "../pageobjects/login.page";
import allureReporter from '@wdio/allure-reporter';

describe('Login tests', () => {

    beforeEach(async () => {
        await loginPage.open();
        allureReporter.addStep('opened LoginPage');
    });

    afterEach(async () => {
        await browser.reloadSession();
    });

    const testCases = [
        { credentials: { username: 'asdas', password: 'asdas' } },
        { credentials: { username: 'Admin', password: 'aaaa' } }
    ];

    testCases.forEach(({ credentials }) => {
        it('should display error message when login with invalid credentials', async () => {

            await loginPage.doLogin(credentials.username, credentials.password);
            allureReporter.addStep('Entered credentials');

            await expect(loginPage.errorMessage).toHaveText('Invalid credentials')

        });
    });

})
