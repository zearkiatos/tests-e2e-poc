class PagesPage {
    constructor(driver){
        this.driver=driver;
      }

    get newPageLink(){
        return this.driver.$('a[href="#/editor/page/"]');
    }

    async clickNewPage(){
        return await this.newPageLink.click();
      }
    

  }

module.exports = PagesPage;
