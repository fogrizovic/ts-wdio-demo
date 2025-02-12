import { $ } from '@wdio/globals'

class HeaderComp {

    private readonly baseLocator: string = 'header';

    // Elements
    public get pageTitle() {
        return $(this.baseLocator).$('.oxd-topbar-header-breadcrumb');
    }

}

export default new HeaderComp();


