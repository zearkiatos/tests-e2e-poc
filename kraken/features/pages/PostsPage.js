class PostsPage {
    constructor(driver){
        this.driver=driver;
      }

    get newPostLink(){
        return this.driver.$('a[href="#/editor/post/"]');
    }

    async clickNewPost(){
        return await this.newPostLink.click();
      }
    

  }

module.exports = PostsPage;
