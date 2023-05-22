class TagsEditorPage {
    name = () => cy.get('input[name="name"]')
    slug = () => cy.get('input[name="slug"]')
    color = () => cy.get('input[name="accent-color"]')
    description= () => cy.get('textarea[name="description"]')
    metaTitle = () => cy.get('input[name="metaTitle"]')
    metaDescription = () => cy.get('textarea[name="metaDescription"]')
    metaUrl = () => cy.get('input[name="canonicalUrl"]')
    twitterTitle = () => cy.get('input[name="twitterTitle"]')
    twitterDescription = () => cy.get('textarea[name="twitterDescription"]')
    facebookTitle = () => cy.get('input[name="ogTitle"]')
    facebookDescription = () => cy.get('textarea[name="ogDescription"]')   

    codeEditor = () =>
    cy.get(".CodeMirror-line").then(($selects) => {
      const selected = $selects.get(0);
      return selected;
    });
    
    codeEditorFooter = () =>
    cy.get(".CodeMirror-line").then(($selects) => {
      const selected = $selects.get(2);
      return selected;
    });

    guardarButton = () => cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view')
    
    ingresarNombre = (nombre) => {
      this.name().type(nombre, { force: true })
    }

    ingresarSlug = (slug) => {
      this.slug().type(slug, { force: true })
    }

    ingresarColor = (color) => {
        let myColor=color.replace("#","")
        this.color().type(myColor)
    }

    ingresarDescripcion = (descripcion) => {
        this.description().type(descripcion, { force: true })
    }
  
    guardarTag = () => {
        this.guardarButton().click()
    }

    ingresarTituloMetaData = (metaTitle) => {
      this.metaTitle().type(metaTitle, { force: true })
    }

    ingresarDescripcionMetaData = (metaDescription) => {
      this.metaDescription().type(metaDescription, { force: true })
    }

    ingresarUrlMetaData = (metaUrl) => {
      this.metaUrl().type(metaUrl)
    }

    ingresarTituloTwitter = (twitterTitle) => {
      this.twitterTitle().type(twitterTitle, { force: true })
    }

    ingresarDescripcionTwitter = (twitterDescription) => {
      this.twitterDescription().type(twitterDescription, { force: true })
    }

    ingresarTituloFacebook = (facebookTitle) => {
      this.facebookTitle().type(facebookTitle, { force: true })
    }

    ingresarDescripcionFacebook = (facebookDescription) => {
      this.facebookDescription().type(facebookDescription, { force: true })
    }

    ingresarCodeInjectionHeader = (codeInjection) => {
      this.codeEditor().click({ force: true });
      this.codeEditor().type(codeInjection);
    }

    ingresarCodeInjectionFooter = (codeInjection) => {      
      this.codeEditorFooter().click({ force: true });
      this.codeEditorFooter().type(codeInjection);
    }

    editarColor = (color) => {
        this.color().type(color, { force: true })
    }
    
    limpiarNombre = () => {
        this.name().clear()
    }

    limpiarColor = () => {
        this.color().clear()
    }

    limpiarSlug = () => {
        this.slug().clear()
    }

    limpiarDescripcion = () => {
        this.description().clear()
    }

    limpiarMetaTitle = () => {
        this.metaTitle().clear()
    }

    limpiarMetaDescription = () => {
        this.metaDescription().clear()
    }

    limpiarMetaUrl = () => {
        this.metaUrl().clear()
    }

    limpiarTwitterTitle = () => {
        this.twitterTitle().clear()
    }

    limpiarTwitterDescription = () => {
        this.twitterDescription().clear()
    }

    limpiarFacebookTitle = () => {
        this.facebookTitle().clear()
    }

    limpiarFacebookDescription = () => {
        this.facebookDescription().clear()
    }
  }

export default TagsEditorPage;