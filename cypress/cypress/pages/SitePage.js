class SitePage {
    
    pagesLink=()=>cy.contains('Pages')
    postsLink=()=>cy.contains('Posts')


    irAPaginas = () => {
        this.pagesLink().click()
    }

    irAPosts = () => {
      this.postsLink().click()
    }
  
   
  }

export default SitePage;