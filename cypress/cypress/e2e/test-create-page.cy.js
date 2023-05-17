import SitePage from '../pages/SitePage'
import SigninPage from '../pages/SigninPage'
import PagesPage from '../pages/PagesPage'
import PageEditorPage from '../pages/PageEditorPage'

const { faker } = require('@faker-js/faker');

describe('Escenario creación de páginas', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const pagesPage = new PagesPage()
  const pageEditorPage = new PageEditorPage()
  const aTitle= faker.lorem.sentence()
  const aBody= faker.lorem.paragraphs(2)

  const scenario="test-create-page";

  

  beforeEach(function() {
  
    

  })

  it('Crear una nueva página', () => {
    const  testCase="creacion-pagina";

    cy.fixture('login-data.json').then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);
    });
    cy.wait(2000);
    cy.screenshot(scenario+'/'+'1-'+testCase+'-Step-visit-site', {overwrite:true});

    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

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

      sitePage.irAPaginas()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-ir-a-paginas', {overwrite:true});

      pagesPage.nuevaPagina()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'6-'+testCase+'-Step-ir-a-nueva-pagina', {overwrite:true});


      pageEditorPage.ingresarTitulo(aTitle)
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'7-'+testCase+'-Step-ingresar-titulo', {overwrite:true});

      pageEditorPage.ingresarCuerpo(aBody)
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'8-'+testCase+'-Step-ingresar-body', {overwrite:true});

      pageEditorPage.menuPublicar()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'9-'+testCase+'-Step-menu-publicar', {overwrite:true});

      pageEditorPage.publicarPagina()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'10-'+testCase+'-Step-publicar-pagina', {overwrite:true});

      

      // Then

      cy.contains('Published').should('exist')
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'11-'+testCase+'-Step-asert', {overwrite:true});
    
    }); 

    
  })

  it('Consultar página previamente creada', ()=>{
    const  testCase="consulta-pagina";

    cy.fixture('login-data.json').then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);
    });

    cy.wait(2000);
    cy.screenshot(scenario+'/'+'12-'+testCase+'-Step-visit-site', {overwrite:true});


    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

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

      sitePage.irAPaginas()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'16-'+testCase+'-Step-ir-a-paginas', {overwrite:true});

      // Then

      cy.contains(aTitle).should('exist')
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'17-'+testCase+'-Step-asert', {overwrite:true});
    
    
    }); 
  });

  it('Abrir la página previamente creada', () =>{
    const  testCase="abrir-pagina";
    //Given
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);
    });
    cy.wait(2000);
    cy.screenshot(scenario+'/'+'18-'+testCase+'-Step-visit-site', {overwrite:true});

    

    //when
    let title=aTitle.replace(/\s+/g,"-").replace(".","")
    cy.visit('http://localhost:2368/'+title+'/')
    cy.wait(1000);
    cy.screenshot(scenario+'/'+'19-'+testCase+'-Step-consultar-pagina-creada', {overwrite:true});

    //Then
    cy.contains(aTitle).should('exist')
    cy.wait(1000);
    cy.screenshot(scenario+'/'+'20-'+testCase+'-Step-asert', {overwrite:true});
    
  });

})