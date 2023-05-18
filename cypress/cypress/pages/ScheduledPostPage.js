class ScheduledPostPage {
  newPostLink = () => cy.contains("New post");

  selectScheduleRadioButton = () =>
    cy.get(".gh-publishmenu-radio").then(($selects) => {
      let selected = $selects.get(1);
      return selected;
    });
  schedulePost = () =>
    cy.get(".gh-publishmenu-button").then(($selects) => {
      let selected = $selects.get(1);
      return selected;
    });

  inputTime = () =>
    cy.get(".gh-date-time-picker-time>input").then(($selects) => {
      let selected = $selects.get(0);
      return selected;
    });

  addFeatureButton = () =>
    cy.get(".koenig-plus-menu-button.flex.justify-center.items-center.relative.w9.h9.ba.b--midlightgrey-l2.bg-white.br-100.anim-normal").then(($selects) => {
      let selected = $selects.get(0);
      return selected;
    });

  bodyEditor = () => 
  cy.get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content").then(($selects) => {
    let selected = $selects.get(0);
    return selected;
  });

  nuevoPost = () => {
    this.newPostLink().click();
  };

  selectSchedule = () => {
    this.selectScheduleRadioButton().click();
  };

  schedule = () => {
    this.schedulePost().click();
  };

  clickOnAddFeatureButton = () => {
    this.addFeatureButton().click();
  };

  setTime = (extraMinutes = 10) => {
    const date = new Date();
    let hour = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const withMinutes =
      minutes + extraMinutes >= 59 ? extraMinutes : minutes + extraMinutes;

    hour = minutes + extraMinutes >= 59 ? hour + 1 : hour;
    hour = hour > 23 ? 0 : hour;

    this.inputTime().clear();
    this.inputTime().type(`${hour}:${withMinutes.toString().padStart(2, "0")}`);
  };

  selectBodyEditor = () => {
    this.bodyEditor().click();
  }
}

export default ScheduledPostPage;
