import React from "react";
import MultiSelect from "../../src/components/MultiSelect.tsx";

describe("<MultiSelect />", () => {
  const testQ = {
    id: 3,
    type: "multi-select",
    question: "Which last names did Jan had?",
    options: ["Levinson", "Scott", "Moore", "Gould"],
    answers: ["Levinson", "Gould"],
    gif: "3.gif",
  };

  beforeEach(() => {
    const onSubmitSpy = cy.spy().as("onSubmitSpy");
    cy.mount(<MultiSelect q={testQ} last={false} onSubmit={onSubmitSpy} />);
  });

  it("renders the question with the correct text and 4 checkboxes as options  ", () => {
    cy.get("[data-cy='multi-select']")
      .find("h2")
      .should("contain", "Which last names did Jan had?");
    cy.get("[data-cy='multi-select']").children().should("have.length", 4);
  });

  it("allows to check one answer and enables submit button", () => {
    cy.get("[data-cy='options']")
      .find("input[type='checkbox']")
      .first()
      .check();
    cy.get("[data-cy='submit']").should("not.be.disabled");
  });

  it("allows to check multiple answers", () => {
    cy.get("[data-cy='options']")
      .find("input[type='checkbox']")
      .first()
      .check();
    cy.get("[data-cy='options']").find("input[type='checkbox']").last().check();
  });

  it("allows to uncheck an answer and disables button", () => {
    cy.get("[data-cy='options']")
      .find("input[type='checkbox']")
      .first()
      .check()
      .click();
    cy.get("[data-cy='submit']").should("be.disabled");
  });

  it("checking all the answers", () => {
    cy.get("[data-cy='options']")
      .find("input[type='checkbox']")
      .each((checkbox) => {
        cy.wrap(checkbox).check();
      });
    cy.get("[data-cy='submit']").should("not.be.disabled");
  });

  it("handling the correct answers", () => {
    cy.get("[data-cy='options']")
      .find("input[type='checkbox']")
      .first()
      .check();
    cy.get("[data-cy='options']").find("input[type='checkbox']").last().check();
    cy.get("[data-cy='submit']").click();
    cy.get("@onSubmitSpy").should("have.been.calledWith", true);
  });
});
