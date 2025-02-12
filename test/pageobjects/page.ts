import { browser } from '@wdio/globals'

export default class Page {

    private readonly baseUrl: string = 'https://opensource-demo.orangehrmlive.com/web/index.php/';

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open(path: string) {
        return browser.url(`${this.baseUrl}${path}`)
    }
}
