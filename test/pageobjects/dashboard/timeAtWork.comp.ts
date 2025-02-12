
class TimeAtWorkComp {

    private readonly baseLocator: string = '//div[contains(@class, "oxd-grid-item oxd-grid-item--gutters orangehrm-dashboard-widget")][.//p[text()="Time at Work"]]';

    // Elements
    public get profilePicture() {
        return $(this.baseLocator).$('[alt="profile picture"]');
    }

}

export default TimeAtWorkComp;


