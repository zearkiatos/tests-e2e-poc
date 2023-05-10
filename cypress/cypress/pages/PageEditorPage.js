class PageEditorPage {
    titulo = () => cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view')
    cuerpo = () => cy.get('article.koenig-editor.w-100.flex-grow.relative.center.mb0.mt0.ember-view')
    publishMenu=()=>cy.contains('Publish')
    publishButton = () => cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view')
    settingsButton = () => cy.get('button.post-settings')
    listTagsButton= () => cy.get('div.ember-view.ember-basic-dropdown-trigger.ember-basic-dropdown-trigger--in-place.ember-power-select-trigger.ember-power-select-multiple-trigger').first()
    updateButton  = () => cy.contains('Update')

  
    ingresarTitulo = (titulo) => {
      this.titulo().type(titulo)
    }

    ingresarCuerpo = (body) => {
      this.cuerpo().type(body)
    }
  
    menuPublicar = () => {
      this.publishMenu().click()
    }
    publicarPagina = () => {
        this.publishButton().click()
    }

    abrirSettings = () => {
      this.settingsButton().click()
    }

    abrirListaTags = () => {
      this.listTagsButton().click()
    }

    actualizarPagina = () => {
        this.updateButton().click()
    }

    confirmarActualizacion = () => {
        this.publishButton().click()
    }    
  }

export default PageEditorPage;