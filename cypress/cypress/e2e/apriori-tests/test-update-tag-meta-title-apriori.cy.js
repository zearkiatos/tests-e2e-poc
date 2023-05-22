import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import TagsPage from '../../pages/TagsPage'
import TagsEditorPage from '../../pages/TagsEditorPage'

import { getRandomJunkTag } from '../../../mock/tag'

describe('Editar un tag habilitar opción Meta data Titulo con más de 300 caracteres', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const tagsPage = new TagsPage()
  const tagsEditorPage = new TagsEditorPage()

  const tag = getRandomJunkTag();

  beforeEach(function() {
  })
    let title = tag.tag_meta_title

    it('Editar un tag habilitar opción Meta data Titulo con más de 300 caracteres', () => {
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
        tagsPage.habilitarMeta()

        tagsEditorPage.limpiarMetaTitle()
        tagsEditorPage.ingresarTituloMetaData(title)    
        tagsEditorPage.guardarTag()

        // Then
        cy.contains('Meta Title cannot be longer than 300 characters').should('exist')
        });     
    })
});