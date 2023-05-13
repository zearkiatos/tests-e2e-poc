import SitePage from '../pages/SitePage'
import SigninPage from '../pages/SigninPage'
import TagsPage from '../pages/TagsPage'
import TagsEditorPage from '../pages/TagsEditorPage'
import PagesPage from '../pages/PagesPage'
import PageEditorPage from '../pages/PageEditorPage'



const { faker } = require('@faker-js/faker');

describe('Escenario creación de Tags', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const tagsPage = new TagsPage()
  const tagsEditorPage = new TagsEditorPage()
  const tagName= faker.lorem.word()
  const pagesPage = new PagesPage()
  const pageEditorPage = new PageEditorPage()

  const scenario="test-create-tags";


  beforeEach(function() {
    
    

  })


  

  it('Crear una nuevo tag', () => {
    const  testCase="creacion-tag";
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


      sitePage.irATags()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-ir-a-tags', {overwrite:true});


      tagsPage.nuevoTag()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'6-'+testCase+'-Step-nuevo-tag', {overwrite:true});


      tagsEditorPage.ingresarNombre(tagName)
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'7-'+testCase+'-Step-ingresar-nombre', {overwrite:true});

      tagsEditorPage.ingresarSlug(tagName)
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'8-'+testCase+'-Step-ingresar-slug', {overwrite:true});

      tagsEditorPage.ingresarDescripcion(faker.lorem.paragraph(1))
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'9-'+testCase+'-Step-ingresar-descripcion', {overwrite:true});

      tagsEditorPage.ingresarColor(faker.color.rgb({ prefix: '#', casing: 'lower' }))
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'10-'+testCase+'-Step-ingresar-color', {overwrite:true});

      tagsEditorPage.guardarTag()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'11-'+testCase+'-Step-guardar-tag', {overwrite:true});
      

      // Then

      cy.contains('Saved').should('exist')
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'12-'+testCase+'-Step-asert', {overwrite:true});
      
    
    }); 

    
  })

  it('Consultar Tag previamente creado', ()=>{
    const  testCase="consultar-tag";
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);
      cy.wait(2000);
      cy.screenshot(scenario+'/'+'13-'+testCase+'-Step-visit-site', {overwrite:true});


      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      cy.wait(2000);
      cy.screenshot(scenario+'/'+'14-'+testCase+'-Step-ingreso-correo', {overwrite:true});
      signinPage.ingresarPassword(this.user.contraseña)
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'15-'+testCase+'-Step-ingreso-password', {overwrite:true});
      signinPage.hacerClicEnIniciarSesion()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'16-'+testCase+'-Step-click-inicio-sesion', {overwrite:true});


     

      sitePage.irATags()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'17-'+testCase+'-Step-ir-a-tags', {overwrite:true});


      // Then

      cy.contains(tagName).should('exist')
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'18-'+testCase+'-Step-asert', {overwrite:true});
    
    }); 
  });

it('crear una página asociada al tag previamente creado', () =>{
    const  testCase="crear-pagina-con-tag";
    const aTitle= faker.lorem.sentence()
    const aBody= faker.lorem.paragraphs(2)
    cy.fixture('login-data.json').then(function (user) {
        this.user = user;
        // Given
        cy.visit(this.user.urlLogin);
        cy.wait(2000);
        cy.screenshot(scenario+'/'+'19-'+testCase+'-Step-visit-site', {overwrite:true});
  
  
        // When
        signinPage.ingresarCorreoElectronico(this.user.usuario)
        cy.wait(2000);
        cy.screenshot(scenario+'/'+'20-'+testCase+'-Step-ingreso-correo', {overwrite:true});
        signinPage.ingresarPassword(this.user.contraseña)
        cy.wait(1000);
        cy.screenshot(scenario+'/'+'21-'+testCase+'-Step-ingreso-password', {overwrite:true});
        signinPage.hacerClicEnIniciarSesion()
        cy.wait(1000);
        cy.screenshot(scenario+'/'+'22-'+testCase+'-Step-click-inicio-sesion', {overwrite:true});
  
  
     
        sitePage.irAPaginas()
        cy.wait(1000);
        cy.screenshot(scenario+'/'+'23-'+testCase+'-Step-click-ir-a-paginas', {overwrite:true});
  
  
        pagesPage.nuevaPagina()
        cy.wait(1000);
        cy.screenshot(scenario+'/'+'24-'+testCase+'-Step-nueva-pagina', {overwrite:true});
  
  
        pageEditorPage.ingresarTitulo(aTitle)
        cy.wait(1000);
        cy.screenshot(scenario+'/'+'25-'+testCase+'-Step-ingresar-titulo', {overwrite:true});
        pageEditorPage.ingresarCuerpo(aBody)
        cy.wait(1000);
        cy.screenshot(scenario+'/'+'26-'+testCase+'-Step-ingresar-body', {overwrite:true});
        
        pageEditorPage.abrirSettings()
        cy.wait(1000);
        cy.screenshot(scenario+'/'+'27-'+testCase+'-Step-abrir-settings', {overwrite:true});
        pageEditorPage.abrirListaTags()
        cy.wait(1000);
        cy.screenshot(scenario+'/'+'28-'+testCase+'-Step-abrir-lista-tags', {overwrite:true});
        //cy.get('ul.ember-power-select-options').first().contains('corporis').click();
  
        
  
        // Then
        cy.get('ul.ember-power-select-options').first().find('li').should('exist').and('contain.text', tagName);
        cy.wait(1000);
        cy.screenshot(scenario+'/'+'29-'+testCase+'-Step-asert', {overwrite:true});
    
        
      
      }); 
  });

  

})