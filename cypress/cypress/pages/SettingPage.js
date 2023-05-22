class SettingPage {
  get timezone() {
    return cy.get("#timezone");
  }

  generalLink = () => cy.contains("General");
  expandTitleAndDescription = () =>
    cy.get(".gh-btn").then(($selects) => {
      let selected = $selects.get(1);
      return selected;
    });

  expandSiteTimezone = () =>
    cy.get(".gh-btn").then(($selects) => {
      let selected = $selects.get(2);
      return selected;
    });

  expandSiteMeta = () =>
    cy.get(".gh-btn").then(($selects) => {
      let selected = $selects.get(5);
      return selected;
    });

  expandLanguage = () =>
    cy.get(".gh-btn").then(($selects) => {
      let selected = $selects.get(3);
      return selected;
    });

  expandSocialMedia = () =>
    cy.get(".gh-btn").then(($selects) => {
      let selected = $selects.get(6);
      return selected;
    });

  selectTitleInput = () =>
    cy.get(".gh-input").then(($selects) => {
      let selected = $selects.get(0);
      return selected;
    });

  selectLanguageInput = () =>
    cy.get(".gh-input").then(($selects) => {
      let selected = $selects.get(3);
      return selected;
    });

  selectFacebookAccount = () =>
    cy.get(".gh-input").then(($selects) => {
      let selected = $selects.get(7);
      return selected;
    });

  selectMetaTitleInput = () => cy.get("#metaTitle")

  selectDescriptionInput = () =>
    cy.get(".gh-input").then(($selects) => {
      let selected = $selects.get(1);
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

  metaClick = () => {
    this.expandSiteMeta().click();
  };

  publicationLanguageClick = () => {
    this.expandLanguage().click();
  }

  socialMediaClick = () => {
    this.expandLanguage().click();
  }

  addNewTitle = (newTitle) => {
    this.selectTitleInput().click({ force: true });
    this.selectTitleInput().clear({ force: true });
    this.selectTitleInput().type(newTitle, { force: true });
  };

  addNewDescription = (newDescription) => {
    this.selectDescriptionInput().click({ force: true });
    this.selectDescriptionInput().clear({ force: true });
    this.selectDescriptionInput().type(newDescription, { force: true });
  };

  addNewLanguage = (newLanguage) => {
    this.selectLanguageInput().click({ force: true });
    this.selectLanguageInput().clear({ force: true });
    this.selectLanguageInput().type(newLanguage, { force: true });
  };

  addNewFacebookAccount = (newLanguage) => {
    this.selectFacebookAccount().click({ force: true });
    this.selectFacebookAccount().clear({ force: true });
    this.selectFacebookAccount().type(newLanguage, { force: true });
  };

  save = () => {
    this.saveSetting().click();
  };

  selectTimezone = (option) => {
    this.timezone.select(option);
  }

  siteTimezoneClick = () => {
    this.expandSiteTimezone().click();
  }

  addNewMetaTitle = (newMetaTitle) => {
    this.selectMetaTitleInput().click({ force: true });
    this.selectMetaTitleInput().clear({ force: true });
    this.selectMetaTitleInput().type(newMetaTitle, { force: true });
  };

  


}

export default SettingPage;
