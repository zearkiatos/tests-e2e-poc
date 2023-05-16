class MemberPage {

    enableMemberLink=()=>cy.contains('Members')
    activateOption=()=>cy.get('label.checkbox.ember-view')
    saveConfiguration=()=>cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view')
    newMember=()=>cy.contains('New member')
    name = () => cy.get('input#member-name')
    email = () => cy.get('input#member-email')
    note = () => cy.get('textarea#member-note')
    saveButton = () => cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view')  


    habilitarMiembros = () => {
      this.enableMemberLink().click()
    }

    activarOpcionMiembros = () => {
      this.activateOption().click()
    }

    guardarConfigurarion = () => {
      this.saveConfiguration().click()
    }

    nuevoMiembro = () => {
      this.newMember().click()
    }

    ingresarNombre = (name) => {
      this.name().type(name)
    }

    ingresarEmail = (email) => {
      this.email().type(email)
    }

    ingresarNota = (note) => {
      this.note().type(note)
    }

    guardarMiembro = () => {
        this.saveButton().click()
    }
}

export default MemberPage;