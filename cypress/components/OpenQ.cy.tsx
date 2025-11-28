import React from "react";
import OpenQ from "../../src/components/OpenQ.tsx";

describe("<OpenQ />", () => {
  const testQ = {
    id: 9,
    type: "open-question",
    question:
      "What was the server password that Jim had to type in after the power went off?",
    validate: (answer: string) => {
      return answer.trim().toLowerCase() === "bigboobz";
    },
    gif: "9.gif",
  };

  it("renders with correct input type", () => {
    const onSubmitSpy = cy.spy().as("onSubmitSpy");
    cy.mount(<OpenQ q={testQ} onSubmit={onSubmitSpy} last={true} />);
    cy.get("[data-cy='submit").should("be.disabled");
    cy.get("[data-cy='open-question']")
      .find("input[type='text']")
      .should("exist");
  });

  it("button is disabled and gets enabled after typing input", () => {
    const onSubmitSpy = cy.spy().as("onSubmitSpy");
    cy.mount(<OpenQ q={testQ} onSubmit={onSubmitSpy} last={true} />);
    cy.get("[data-cy='submit").should("be.disabled");
    cy.get("[data-cy='open-question']").find("input[type='text']").type("xxxx");
    cy.get("[data-cy='submit")
      .should("not.be.disabled")
      .should("have.text", "Finish quiz");
  });

  it("button has correct text - last question", () => {
    const onSubmitSpy = cy.spy().as("onSubmitSpy");
    cy.mount(<OpenQ q={testQ} onSubmit={onSubmitSpy} last={true} />);
    cy.get("[data-cy='submit").should("have.text", "Finish quiz");
  });

  it("button has correct text - not last question", () => {
    const onSubmitSpy = cy.spy().as("onSubmitSpy");
    cy.mount(<OpenQ q={testQ} onSubmit={onSubmitSpy} last={false} />);
    cy.get("[data-cy='submit").should("have.text", "Next");
  });

  it("handling the correct answer, click", () => {
    const onSubmitSpy = cy.spy().as("onSubmitSpy");
    cy.mount(<OpenQ q={testQ} onSubmit={onSubmitSpy} last={false} />);
    cy.get("[data-cy='open-question']")
      .find("input[type='text']")
      .type("bigboobz");
    cy.get("[data-cy='submit").click();
    cy.get("@onSubmitSpy").should("have.been.calledWith", true);
  });

  it("handling an incorrect answer", () => {
    const onSubmitSpy = cy.spy().as("onSubmitSpy");
    cy.mount(<OpenQ q={testQ} onSubmit={onSubmitSpy} last={false} />);
    cy.get("[data-cy='open-question']")
      .find("input[type='text']")
      .type("somepass");
    cy.get("[data-cy='submit").click();
    cy.get("@onSubmitSpy").should("have.been.calledWith", false);
  });

  it("handling the correct answer with extra spaces", () => {
    const onSubmitSpy = cy.spy().as("onSubmitSpy");
    cy.mount(<OpenQ q={testQ} onSubmit={onSubmitSpy} last={false} />);
    cy.get("[data-cy='open-question']")
      .find("input[type='text']")
      .type("  bigboobz ");
    cy.get("[data-cy='submit").click();
    cy.get("@onSubmitSpy").should("have.been.calledWith", true);
  });

  it("handling the correct answer in uppercase", () => {
    const onSubmitSpy = cy.spy().as("onSubmitSpy");
    cy.mount(<OpenQ q={testQ} onSubmit={onSubmitSpy} last={false} />);
    cy.get("[data-cy='open-question']")
      .find("input[type='text']")
      .type("BIGBOOBZ");
    cy.get("[data-cy='submit").click();
    cy.get("@onSubmitSpy").should("have.been.calledWith", true);
  });

  it("renders with correct gif", () => {
    const onSubmitSpy = cy.spy().as("onSubmitSpy");
    cy.mount(<OpenQ q={testQ} onSubmit={onSubmitSpy} last={true} />);
    cy.get("[data-cy='q-gif")
      .should("have.attr", "src")
      .and("include", `${testQ.id}.gif`);
  });
});
