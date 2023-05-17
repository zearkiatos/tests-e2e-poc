class SettingPage {
  generalLink = () => cy.contains("General");
  expandTitleAndDescription = () =>
    cy.get(".gh-btn").then(($selects) => {
      let selected = $selects.get(1);
      return selected;
    });
  selectTitleInput = () =>
    cy.get(".gh-input").then(($selects) => {
      let selected = $selects.get(0);
      return selected;
    });
  saveSetting = () =>
    cy.get(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view").then(($selects) => {
      let selected = $selects.get(2);
      return selected;
    });

  goToGeneralSetting = () => {
    this.generalLink().click();
  };

  titleAndDescriptionClick = () => {
    this.expandTitleAndDescription().click();
  };

  addNewTitle = (newTitle) => {
    this.selectTitleInput().click({ force: true });
    this.selectTitleInput().clear({ force: true });
    this.selectTitleInput().type(newTitle, { force: true });
  };

  save = () => {
    this.saveSetting().click();
  };
}

export default SettingPage;
