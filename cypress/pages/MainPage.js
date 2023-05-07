import { config } from '../../config';

export class MainPage {
  visitMainPage() {
    cy.visit(config.baseUrl);
  }

  clickOnLogin() {
    cy.get('.login-cta').click();
  }
}
