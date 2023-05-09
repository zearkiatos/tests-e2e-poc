class TagsPage {
    
    newTagLink=()=>cy.contains('New tag')
    tagName=()=>cy.contains('Getting Started')


    nuevoTag = () => {
      this.newTagLink().click()
    }

    editarTag = () => {
      this.tagName().click()
    }   
  }

export default TagsPage;