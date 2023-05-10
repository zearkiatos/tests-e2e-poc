class TagsPage {

    constructor(driver){
        this.driver=driver;
    }

     
    get newTagLink(){
        return this.driver.$('a[href="#/tags/new/"]');
    }

    get tagName(){
        let index=0;
        let elements = this.driver.$$("h3.gh-tag-list-name");
        for (let i = 0; i < elements.length; i++) {
            let textInto=elements[i].getText();
            if(textInto=='Getting Started'){
                index=i;
                break;
            }
        }

        return elements[index];
    }

    async existTaginList(name){
        let index=-1;
        let elements = await this.driver.$$("h3.gh-tag-list-name");
        for (let i = 0; i < elements.length; i++) {
            let textInto=await elements[i].getText();
            if(textInto==name){
                index=i;
                break;
            }
        }
        return index>-1;
    }
    

    async clickNewTag(){
        return await this.newTagLink.click();
    }

    async clickTagName(){
        return await this.tagName.click();
    }
    

  }


module.exports = TagsPage;
