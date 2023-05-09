class SitePage {

    constructor(driver){
        this.driver=driver;
    }

    get pagesLink(){
        return this.driver.$('a[href="#/pages/"]');
    }

    get postsLink(){
      return this.driver.$('a[href="#/posts/"]');
    }

    get tagsLink(){
      return this.driver.$('a[href="#/tags/"]');
    }

    get staffLink(){
      return this.driver.$('a[href="#/staff/"]');
    }

    get scheduledPost(){
      return this.driver.$('a[href="#/posts/?type=scheduled"]');
    }

    
    
   

    async irAPaginas(){
      
      return await this.pagesLink.click();

    }

    async clickPosts(){
      
      return await this.postsLink.click();

    }

    async clickTags(){
      
      return await this.tagsLink.click();

    }

    async clickStaff(){
      
      return await this.staffLink.click();

    }

    async clickScheduledPost(){
      
      return await this.scheduledPost.click();

    }

    
    
   
  
   
  }

module.exports = SitePage;