class DesignSettingPage {
  constructor(driver) {
    this.driver = driver;
  }

  get name() {
    return this.driver.$$("input.ember-text-field.gh-input.ember-view")[8];
  }

  get url() {
    return this.driver.$$("input.ember-text-field.gh-input.ember-view")[9];
  }

  get saveButton() {
    return this.driver.$("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view");
  }

  get newNavOption() {
    return this.driver.$("a[href='https://www.google.com/']");
  }

  get deleteButton() {
    return this.driver.$$("button.gh-blognav-delete")[4];
  }

  async setName(name) {
    return await this.name.setValue(name);
  }

  async setUrl(url) {
    return await this.url.setValue(url);
  }

  async clickOnSaveButton() {
    return await this.saveButton.click();
  }

  async existGoogleNavOption() {
    const element = await this.newNavOption
    return element != undefined
  }


  async notExistGoogleNavOption() {
    const element = await this.newNavOption;
    
    return !!element.error
  }

  async clickOnDeleteButton() {
    return await this.deleteButton.click();
  }
}

module.exports = DesignSettingPage;
