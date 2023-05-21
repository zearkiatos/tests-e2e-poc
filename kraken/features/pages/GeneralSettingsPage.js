class GeneralSettingsPage {
  constructor(driver) {
    this.driver = driver;
  }

  get expandTitleAndDescriptionButton() {
    return this.driver.$$(".gh-btn")[1];
  }

  get expandTimezoneButton() {
    return this.driver.$$(".gh-btn")[2];
  }

  get saveSettingButton() {
    return this.driver.$$(".gh-btn")[0];
  }

  get title() {
    return this.driver.$("input.ember-text-field.gh-input.ember-view");
  }

  get description() {
    return this.driver.$$("input.ember-text-field.gh-input.ember-view")[1];
  }

  get timezone() {
    return this.driver.$("#timezone");
  }

  get getSiteTitle() {
    return this.driver.$$('div.gh-nav-menu-details-blog')[0];
  }

  // get timezone() {
  //   return $("#timezone");
  // }

  async clickOnExpandTitleAndDescriptionButton() {
    return await this.expandTitleAndDescriptionButton.click();
  }

  async clickOnExpandTimezoneButton() {
    return await this.expandTimezoneButton.click();
  }

  async setTitle(title) {
    return await this.title.setValue(title);
  }

  async setDescription(description) {
    return await this.description.setValue(description);
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

  async selectTimezone(timezone) {
    await this.driver.execute((timezone) => {
      const selectbox = document.getElementById("timezone");
      selectbox.value = timezone;
    }, timezone);
  }

  async getSelectedTimezone(timezone) {
    return await this.driver.$(`[value="${timezone}"]`);
  }
}

module.exports = GeneralSettingsPage;
