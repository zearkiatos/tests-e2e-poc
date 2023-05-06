class SitePage {
    
    pagesLink=()=>cy.contains('Pages')


    irAPaginas = () => {
        this.pagesLink().click()
    }
  
   
  }

export default SitePage;