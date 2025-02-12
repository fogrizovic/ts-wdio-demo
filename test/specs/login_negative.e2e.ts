import { expect } from '@wdio/globals'
import loginPage from "../pageobjects/login.page";

describe('Login tests', () => {

    beforeEach(async () => {
        await loginPage.open();
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

            await expect(loginPage.errorMessage).toHaveText('Invalid credentials')

        });
    });

})
