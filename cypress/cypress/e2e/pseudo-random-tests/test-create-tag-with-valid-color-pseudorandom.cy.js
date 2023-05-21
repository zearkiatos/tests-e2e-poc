import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import TagsPage from '../../pages/TagsPage'
import TagsEditorPage from '../../pages/TagsEditorPage'
import { TagClient } from '../../../clientApi/tagClient'



const { faker } = require('@faker-js/faker');

describe('Escenario creación de Tags', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const tagsPage = new TagsPage()
  const tagsEditorPage = new TagsEditorPage()
  const tagClient=new TagClient();

  beforeEach(function() {

  })

  it('Crear una nuevo tag con color valido', () => {
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);
      

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()
      

      sitePage.irATags()
      
      tagsPage.nuevoTag()

      tagClient.getValidTags().then(function (body){


        const rand = parseInt((Math.random() * 1000).toFixed(0), 10);

        tagsEditorPage.ingresarNombre(body[rand].name)
      
        tagsEditorPage.ingresarSlug(body[rand].slug)
        
        tagsEditorPage.ingresarDescripcion(body[rand].description)
        
        tagsEditorPage.ingresarColor(body[rand].color.replace('#',''))
        
        tagsEditorPage.guardarTag()
        
        // Then
  
        cy.contains('Saved').should('exist')

      });
      

     
      
    
    }); 

    
  })



  

})