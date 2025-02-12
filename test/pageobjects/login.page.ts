import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {

    private readonly path: string = 'auth/login';

    // Elements
    private get userNameInput() {
        return $('[name="username"]');
    }

    private get passwordInput() {
        return $('[name="password"]');
    }

    private get loginButton() {
        return $('[type="submit"]')
    }

    public get errorMessage() {
        return $('[role="alert"]')
    }

    // Acitons
    public open() {
        return super.open(this.path);
    }

    public async doLogin(username: string, password: string) {
        await this.userNameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

}

export default new LoginPage();
