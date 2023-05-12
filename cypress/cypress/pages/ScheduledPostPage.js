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

  nuevoPost = () => {
    this.newPostLink().click();
  };

  selectSchedule = () => {
    this.selectScheduleRadioButton().click();
  };

  schedule = () => {
    this.schedulePost().click();
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
    this.inputTime().type(`${hour}:${withMinutes.toString().padStart(2,'0')}`);
  };
}

export default ScheduledPostPage;
