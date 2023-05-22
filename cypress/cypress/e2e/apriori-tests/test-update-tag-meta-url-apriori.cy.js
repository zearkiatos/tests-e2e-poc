import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import TagsPage from '../../pages/TagsPage'
import TagsEditorPage from '../../pages/TagsEditorPage'

import { getRandomJunkTag } from '../../../mock/tag'

describe('Editar un tag habilitar opción Meta data URL incorrecta', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const tagsPage = new TagsPage()
  const tagsEditorPage = new TagsEditorPage()

  const tag = getRandomJunkTag();

  beforeEach(function() {
  })
    let url = tag.tag_meta_URL

    it('Editar un tag habilitar opción Meta data URL incorrecta', () => {
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

        tagsEditorPage.limpiarMetaUrl()
        tagsEditorPage.ingresarUrlMetaData(url)    
        tagsEditorPage.guardarTag()

        // Then
        cy.contains('The url should be a valid url').should('exist')
        });     
    })
});