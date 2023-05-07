class SitePage {
    
    pagesLink=()=>cy.contains('Pages')
    postsLink=()=>cy.contains('Posts')
    tagsLink=()=>cy.contains('Tags')


    irAPaginas = () => {
        this.pagesLink().click()
    }

    irAPosts = () => {
      this.postsLink().click()
    }

    irATags = () => {
      this.tagsLink().click()
    }
  
   
  }

export default SitePage;