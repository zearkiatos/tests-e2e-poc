class GeneralSettingsPage {
  constructor(driver) {
    this.driver = driver;
  }

  get expandTitleAndDescriptionButton() {
    return this.driver.$$(".gh-btn")[1];
  }

  get saveSettingButton() {
    return this.driver.$$(".gh-btn")[0];
  }

  get title() {
    return this.driver.$("input.ember-text-field.gh-input.ember-view");
  }

  async clickOnExpandTitleAndDescriptionButton() {
    return await this.expandTitleAndDescriptionButton.click();
  }

  async setTitle(title) {
    return await this.title.setValue(title);
  }

  async clickOnSaveSettingButton() {
    return await this.saveSettingButton.click();
  }

  async siteTitle(title) {
    let found = false;
    let elements = await this.driver.$$("div.gh-nav-menu-details-blog");

    for (let element of elements) {
      let textInto = await element.getText();
      found = textInto == title;
      if (found) break;
    }

    return found;
  }
}

module.exports = GeneralSettingsPage;
