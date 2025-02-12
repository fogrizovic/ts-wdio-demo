import Page from '../page.js';
import TimeAtWorkComp from './timeAtWork.comp.js';

class DashboardPage extends Page {

    private readonly path: string = 'dashboard/index';

    // Elements
    public timeAtWorkWidget = new TimeAtWorkComp()


    // Acitons
    public open() {
        return super.open(this.path);
    }

}

export default new DashboardPage();
