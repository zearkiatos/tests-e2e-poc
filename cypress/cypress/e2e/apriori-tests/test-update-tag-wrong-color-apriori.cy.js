import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import TagsPage from '../../pages/TagsPage'
import TagsEditorPage from '../../pages/TagsEditorPage'

import { getRandomJunkTag } from '../../../mock/tag'

describe('Editar un tag asignando un color Hexagecimal incorrecto', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const tagsPage = new TagsPage()
  const tagsEditorPage = new TagsEditorPage()

  const tag = getRandomJunkTag();

  beforeEach(function() {
  })
    let color = tag.tag_color

    it('Editar un tag asignando un color Hexagecimal incorrecto', () => {
        cy.fixture('login-data.json').then(function (user) {
        this.user = user;        
        
        // Given
        cy.visit(this.user.urlLogin);

        // When
        signinPage.ingresarCorreoElectronico(this.user.usuario)
        signinPage.ingresarPassword(this.user.contraseña)
        signinPage.hacerClicEnIniciarSesion()
        sitePage.irATags()
        tagsPage.editarTag()

        tagsEditorPage.limpiarColor()
        tagsEditorPage.editarColor(color)    
        tagsEditorPage.guardarTag()

        // Then
        cy.contains('Retry').should('exist')
        });     
    })
});