class PageEditorPage {

    constructor(driver){
        this.driver=driver;
    }

    get title(){
        return this.driver.$('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');
    }

    get body(){
      
       
        //return this.driver.$('article.koenig-editor.w-100.flex-grow.relative.center.mb0.mt0.ember-view');
        return this.driver.$('div.koenig-editor__editor.__mobiledoc-editor.__has-no-content');
    }

    get publishMenu(){
        return this.driver.$('div.gh-publishmenu.ember-view');
    }

    get publishButton(){
        return this.driver.$('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
    }

    get settingsButton(){
        return this.driver.$('button.post-settings');
    }

    get listTagsButton(){
        return this.driver.$('div.ember-view.ember-basic-dropdown-trigger.ember-basic-dropdown-trigger--in-place.ember-power-select-trigger.ember-power-select-multiple-trigger');
    }

   

    async setTitle(title){
        return await this.title.setValue(title);
    }

    async setBody(body){
        return await this.body.setValue(body);
    }


    async clickPublishMenu(){
        return await this.publishMenu.click();
    }

    async clickPublisPage(){
        return await this.publishButton.click();
    }

    async clickSettings(){
        return await this.settingsButton.click();
    }

    async clickTagList(){
        return await this.listTagsButton.click();
    }
  
 
    
  }

module.exports = PageEditorPage;