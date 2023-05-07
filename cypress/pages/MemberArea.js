export class MemberArea {
  clickCreateNewNote() {
    cy.get('#qa-HOME_NOTE_WIDGET_CREATE_NOTE').click();
  }
  clickLogout() {
    cy.get('#qa-NAV_USER').click();
    cy.get('#qa-ACCOUNT_DROPDOWN_LOGOUT').click();
  }
  fillTitle(text) {
    cy.get('[data-testid="note-header"]').type(text);
  }
  clickOnHomePageNavigation() {
    cy.get('#qa-NAV_HOME').click();
  }
  clickOnNotesNavigation() {
    cy.get('qa-NAV_ALL_NOTES').click();
  }
  checkIfNoteWithProvidedTitleWasCreated(title) {}
}
