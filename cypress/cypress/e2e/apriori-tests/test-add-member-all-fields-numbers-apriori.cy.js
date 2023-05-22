import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import MemberPage from '../../pages/MemberPage'
import { getRandomMemberNumber } from '../../../mock/member'


describe('Agregar nuevo miembro con campos únicamente numericos', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const memberPage = new MemberPage()

  const member= getRandomMemberNumber();

  const memberName = member.member_name
  const memberEmail = member.member_email
  const memberNote = member.member_description
  const memberLabel = member.member_label

  beforeEach(function() {
  })

  it('Agregar nuevo miembro con campos únicamente numericos', () => {    
      cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()

      sitePage.irAMembers()

      memberPage.nuevoMiembro()

      memberPage.ingresarNombre(memberName)
      memberPage.ingresarEmail(memberEmail)
      memberPage.ingresarNota(memberNote)
      memberPage.ingresarLabel(memberLabel)
      memberPage.guardarMiembro()
      
      //Then    
      cy.contains('Retry').should('exist')
    });     
  })
})