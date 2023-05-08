class SitePage {
    
    pagesLink=()=>cy.contains('Pages')
    postsLink=()=>cy.contains('Posts')
    tagsLink=()=>cy.contains('Tags')
    staffLink=()=>cy.contains('Staff')
    scheduledPost=()=>cy.contains('Scheduled')


    irAPaginas = () => {
        this.pagesLink().click()
    }

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
    }
  
   
  }

export default SitePage;