import SitePage from '../pages/SitePage'
import SigninPage from '../pages/SigninPage'
import PostsPage from '../pages/PostsPage'
import PostEditorPage from '../pages/PostEditorPage'

const { faker } = require('@faker-js/faker');

describe('Escenario creación de posts', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const postsPage = new PostsPage()
  const postEditorPage = new PostEditorPage()
  const aTitle= faker.lorem.sentence()
  const aBody= faker.lorem.paragraphs(2)

  

  beforeEach(function() {
    
    

  })

  it('Crear una nuevo post', () => {
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()

      sitePage.irAPosts()

      postsPage.nuevoPost()

      postEditorPage.ingresarTitulo(aTitle)
      postEditorPage.ingresarCuerpo(aBody)
      postEditorPage.menuPublicar()

      postEditorPage.publicarPagina()

      

      // Then

      cy.contains('Published').should('exist')
      
    
    }); 

    
  })

  it('Consultar Post previamente creado', ()=>{
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()

      sitePage.irAPosts()

      // Then

      cy.contains(aTitle).should('exist')
      
    
    }); 
  });

  it('Abrir el post previamente creado', () =>{
    //Given
    let title=aTitle.replace(/\s+/g,"-").replace(".","")

    //when
    cy.fixture('urls.json').then(function (urls) {

        cy.visit(urls.siteUrl+title+'/')
    });
    

    //Then
    cy.contains(aTitle).should('exist')
  });

  it('verificar que el post aparece en la página principal', () =>{
    cy.fixture('login-data.json').then(function (user) {
        this.user = user;
        // Given
        cy.fixture('urls.json').then(function (urls) {

            cy.visit(urls.siteUrl);
        });
  
        // When
        
  
        // Then
        cy.contains(aTitle).should('exist')
        
        
      }); 
  });

})