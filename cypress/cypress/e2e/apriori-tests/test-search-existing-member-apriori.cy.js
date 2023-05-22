import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import MemberPage from '../../pages/MemberPage'
import { getRandomMember } from '../../../mock/member'


describe('Realizar la búsqueda de un miembro existente', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const memberPage = new MemberPage()

  const member= getRandomMember();

  const memberName = member.member_name

  beforeEach(function() {
  })

  it('Realizar la búsqueda de un miembro existente', () => {    
      cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()
      sitePage.irAMembers()

      memberPage.ingresarBusqueda(memberName)
      
      //Then    
      cy.contains('No members match the current filter').should('exist')
    });     
  })
})