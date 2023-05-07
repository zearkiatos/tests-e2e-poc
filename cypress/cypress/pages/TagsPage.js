class TagsPage {
    
    newTagLink=()=>cy.contains('New tag')


    nuevoTag = () => {
        this.newTagLink().click()
    }
  
   
  }

export default TagsPage;