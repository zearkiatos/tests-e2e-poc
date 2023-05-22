class TagsPage {
    
    newTagLink=()=>cy.contains('New tag')
    tagName=()=>cy.contains('Getting Started')
    enableMetaSection=()=>cy.get('button.gh-btn')
    enableTwitterSection=()=>cy.get('button.gh-btn')
    enableFacebookSection=()=>cy.get('button.gh-btn')
    enableCodeInjectionSection=()=>cy.get('button.gh-btn')    

    nuevoTag = () => {
      this.newTagLink().click()
    }

    editarTag = () => {
      this.tagName().click()
    }
    
    habilitarMeta = () => {
      this.enableMetaSection().eq(1).click()
    }

    habilitarTwitter = () => {
      this.enableTwitterSection().eq(2).click({ force: true })
    }

    habilitarFacebook = () => {
      this.enableFacebookSection().eq(3).click()
    }

    habilitarCodeInjection = () => {
      this.enableCodeInjectionSection().eq(4).click()
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

export default TagsPage;