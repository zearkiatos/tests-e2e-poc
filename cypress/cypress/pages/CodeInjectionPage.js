class CodeInjectionPage {
  codeInjectionLink = () => cy.contains("Code injection");

  selectSaveButton = () =>
    cy.get(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view").then(($selects) => {
      const selected = $selects.get(0);
      return selected;
    });

  codeEditor = () =>
    cy.get(".CodeMirror-line").then(($selects) => {
      const selected = $selects.get(1);
      return selected;
    });

  goToCodeInjection = () => {
    this.codeInjectionLink().click({ force: true });
  };

  selectCodeEditor = () => {
    this.codeEditor().click({ force: true });
    this.codeEditor().type("<h1>Hello World!</h1>");
  };

  deleteHtml = () => {
    this.codeEditor().invoke('remove');
  };

  save = () => {
    this.selectSaveButton().click();
  };
}

export default CodeInjectionPage;
