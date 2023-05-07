class TagsEditorPage {
    name = () => cy.get('input[name="name"]')
    slug = () => cy.get('input[name="slug"]')
    color = () => cy.get('input[name="accent-color"')
    description= () => cy.get('textarea[name="description"]')
    
    guardarButton = () => cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view')
    

  
    ingresarNombre = (nombre) => {
      this.name().type(nombre)
    }

    ingresarSlug = (slug) => {
      this.slug().type(slug)
    }

    ingresarColor = (color) => {
        let myColor=color.replace("#","")
        this.color().type(myColor)
    }

    ingresarDescripcion = (descripcion) => {
        this.description().type(descripcion)
    }
  
   
    guardarTag = () => {
        this.guardarButton().click()
    }

    
  }

export default TagsEditorPage;