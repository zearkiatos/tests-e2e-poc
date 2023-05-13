class CodeInjectionPage {
  constructor(driver) {
    this.driver = driver;
  }

  get selectCodeEditorLine() {
    return this.driver.$$(".CodeMirror-line")[1];
  }

  get saveButton() {
    return this.driver.$("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view");
  }

  async setCodeEditorLine(code) {
    await this.driver.execute((code) => {
      document.getElementsByClassName(
        "CodeMirror-line"
      )[1].textContent = `<h3>${code}</h3>`;
    }, code);
  }

  async clickOnSaveButton() {
    return await this.saveButton.click();
  }

  async existHtmlContent() {
    const htmlContent = await this.selectCodeEditorLine.getText();

    return htmlContent == "<h3>Hello World!</h3>";
  }
}

module.exports = CodeInjectionPage;
