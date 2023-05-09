class SitePage {

    constructor(driver){
        this.driver=driver;
    }

    get pagesLink(){
        return this.driver.$('a[href="#/pages/"]');
    }

   

    async irAPaginas(){
      
      return await this.pagesLink.click();

    }
    
    /*pagesLink=()=>cy.contains('Pages')
    postsLink=()=>cy.contains('Posts')
    tagsLink=()=>cy.contains('Tags')
    staffLink=()=>cy.contains('Staff')
    scheduledPost=()=>cy.contains('Scheduled')


   

    irAPosts = () => {
      this.postsLink().click()
    }

    irAStaff = () => {
      this.staffLink().click()
    }

    irATags = () => {
      this.tagsLink().click()
    }

    goToScheduledPost = ()=> {
      this.scheduledPost().click()
    }*/
  
   
  }

module.exports = SitePage;