class CodeInjectionPage {
  constructor(driver) {
    this.driver = driver;
  }

  get selectCodeEditorLine() {
    return this.driver.$$(".CodeMirror-line")[1];
  }

  get selectHeaderCodeEditorLine() {
    return this.driver.$$(".CodeMirror-line")[0];
  }

  get saveButton() {
    return this.driver.$("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view");
  }

  async setCodeEditorLine(code = "<h3>Hello World!</h3>") {
    await this.driver.execute((code) => {
      document.getElementsByClassName("CodeMirror-line")[1].textContent = code;
    }, code);
  }

  async setHeaderCodeEditorLine(code = "<h3>Hello World!</h3>") {
    await this.driver.execute((code) => {
      document.getElementsByClassName("CodeMirror-line")[0].textContent = code;
    }, code);
  }

  async clickOnSaveButton() {
    return await this.saveButton.click();
  }

  async existHtmlContent(content = "<h3>Hello World!</h3>") {
    const htmlContent = await this.selectCodeEditorLine.getText();

    return htmlContent == content;
  }

  async existHtmlContentHeader(content = "<h3>Hello World!</h3>") {
    const htmlContent = await this.selectHeaderCodeEditorLine.getText();

    return htmlContent == content;
  }
}

module.exports = CodeInjectionPage;
