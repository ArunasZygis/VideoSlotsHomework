import { config } from '../../config';

export class LoginPage {
  fillEmail(email) {
    cy.get('#username').type(email);
  }

  fillPassword(password) {
    cy.get('#password').type(password);
  }

  clickContinue() {
    cy.get('#loginButton').click();
  }

  clickSignIn() {
    cy.get('#loginButton').click();
  }

  checkErrorMessage(message) {
    cy.get('#responseMessage').should('contain', message);
  }

  login(email, password) {
    this.fillEmail(email);
    this.clickContinue();
    this.fillPassword(password);
    this.clickSignIn();
  }

  checkSuccessLogin() {
    cy.get('#qa-NAV_USER').should('be.visible');
  }

  checkSuccessLogout() {
    cy.get('#qa-NAV_USER').should('not.be.visible');
  }
}
