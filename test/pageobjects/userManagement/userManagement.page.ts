import Page from '../page.js';

class UserManagementPage extends Page {

    private readonly path: string = 'admin/viewSystemUsers';

    // Elements


    // Acitons
    public open() {
        return super.open(this.path);
    }

}

export default new UserManagementPage();
