class PagesPage {
    
    newPageLink=()=>cy.contains('New page')


    nuevaPagina = () => {
        this.newPageLink().click()
    }
  
   
  }

export default PagesPage;