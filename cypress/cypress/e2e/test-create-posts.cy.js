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

  const scenario="test-create-posts";


  beforeEach(function() {
    
    

  })

  it('Crear una nuevo post', () => {
    const  testCase="creacion-post";
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);
      cy.wait(2000);
      cy.screenshot(scenario+'/'+'1-'+testCase+'-Step-visit-site', {overwrite:true});


      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      cy.wait(2000);
      cy.screenshot(scenario+'/'+'2-'+testCase+'-Step-ingreso-correo', {overwrite:true});
      signinPage.ingresarPassword(this.user.contraseña)
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'3-'+testCase+'-Step-ingreso-password', {overwrite:true});
      signinPage.hacerClicEnIniciarSesion()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'4-'+testCase+'-Step-click-inicio-sesion', {overwrite:true});

      sitePage.irAPosts()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-ir-a-posts', {overwrite:true});


      postsPage.nuevoPost()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'6-'+testCase+'-Step-nuevo-posts', {overwrite:true});

      postEditorPage.ingresarTitulo(aTitle)
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'7-'+testCase+'-Step-ingresar-titulo', {overwrite:true});
      postEditorPage.ingresarCuerpo(aBody)
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'8-'+testCase+'-Step-ingresar-body', {overwrite:true});
      postEditorPage.menuPublicar()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'9-'+testCase+'-Step-menu-publicar', {overwrite:true});

      postEditorPage.publicarPagina()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'10-'+testCase+'-Step-publicar-post', {overwrite:true});

      

      // Then

      cy.contains('Published').should('exist')
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'11-'+testCase+'-Step-asert', {overwrite:true});
    
      
    
    }); 

    
  })

  it('Consultar Post previamente creado', ()=>{
    const  testCase="consultar-post";
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);
      cy.wait(2000);
      cy.screenshot(scenario+'/'+'12-'+testCase+'-Step-visit-site', {overwrite:true});
  


      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      cy.wait(2000);
      cy.screenshot(scenario+'/'+'13-'+testCase+'-Step-ingreso-correo', {overwrite:true});
      signinPage.ingresarPassword(this.user.contraseña)
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'14-'+testCase+'-Step-ingreso-password', {overwrite:true});
      signinPage.hacerClicEnIniciarSesion()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'15-'+testCase+'-Step-click-inicio-sesion', {overwrite:true});


      sitePage.irAPosts()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'16-'+testCase+'-Step-click-ir-a-posts', {overwrite:true});


      // Then

      cy.contains(aTitle).should('exist')
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'17-'+testCase+'-Step-asert', {overwrite:true});
    
      
    
    }); 
  });

  it('Abrir el post previamente creado', () =>{
    const  testCase="abrir-post";
    //Given
    let title=aTitle.replace(/\s+/g,"-").replace(".","")

    //when
    cy.fixture('urls.json').then(function (urls) {

        cy.visit(urls.siteUrl+title+'/')
    });
    cy.wait(2000);
    cy.screenshot(scenario+'/'+'18-'+testCase+'-Step-visit-post', {overwrite:true});

    

    //Then
    cy.contains(aTitle).should('exist')
    cy.wait(1000);
    cy.screenshot(scenario+'/'+'19-'+testCase+'-Step-asert', {overwrite:true});
  });

  it('verificar que el post aparece en la página principal', () =>{
    const  testCase="verificar-post";
    cy.fixture('login-data.json').then(function (user) {
        this.user = user;
        // Given
        cy.fixture('urls.json').then(function (urls) {

            cy.visit(urls.siteUrl);
        });
        cy.wait(2000);
        cy.screenshot(scenario+'/'+'20-'+testCase+'-Step-visit-posts', {overwrite:true});

  
        // When
        
  
        // Then
        cy.contains(aTitle).should('exist')
        cy.wait(1000);
        cy.screenshot(scenario+'/'+'21-'+testCase+'-Step-asert', {overwrite:true});
        
      }); 
  });

})