import React from "react";
import ScoreMessage from "../../src/components/ScoreMessage.tsx";

describe("<ScoreMessage />", () => {
  it("renders correct gif for score 0-2 with score 2", () => {
    cy.mount(<ScoreMessage finalScore={2} />);
    cy.get("[data-cy='result-gif']")
      .should("be.visible")
      .should("have.attr", "src")
      .and("include", "loser.gif");
  });
  it("renders correct gif for score 3-5 with score 3", () => {
    cy.mount(<ScoreMessage finalScore={3} />);
    cy.get("[data-cy='result-gif']")
      .should("be.visible")
      .should("have.attr", "src")
      .and("include", "ok.gif");
  });
  it("renders correct gif for score 3-5 with score 5", () => {
    cy.mount(<ScoreMessage finalScore={5} />);
    cy.get("[data-cy='result-gif']")
      .should("be.visible")
      .should("have.attr", "src")
      .and("include", "ok.gif");
  });
  it("renders correct gif for score 6-9 with score 6", () => {
    cy.mount(<ScoreMessage finalScore={6} />);
    cy.get("[data-cy='result-gif']")
      .should("be.visible")
      .should("have.attr", "src")
      .and("include", "great.gif");
  });
  it("renders correct gif for score 6-9 with score 9", () => {
    cy.mount(<ScoreMessage finalScore={9} />);
    cy.get("[data-cy='result-gif']")
      .should("be.visible")
      .should("have.attr", "src")
      .and("include", "great.gif");
  });
  it("renders correct gif for score 10-12 with score 10", () => {
    cy.mount(<ScoreMessage finalScore={10} />);
    cy.get("[data-cy='result-gif']")
      .should("be.visible")
      .should("have.attr", "src")
      .and("include", "legend.gif");
  });

  it("renders correct message for score 0-2 with score 2", () => {
    cy.mount(<ScoreMessage finalScore={2} />);
    cy.get("[data-cy='score-message']")
      .should("be.visible")
      .should("include.text", "0-2: ");
  });
  it("renders correct message for score 3-5 with score 3", () => {
    cy.mount(<ScoreMessage finalScore={3} />);
    cy.get("[data-cy='score-message']")
      .should("be.visible")
      .should("include.text", "3-5: ");
  });
  it("renders correct message for score 3-5 with score 5", () => {
    cy.mount(<ScoreMessage finalScore={5} />);
    cy.get("[data-cy='score-message']")
      .should("be.visible")
      .should("include.text", "3-5: ");
  });
  it("renders correct message for score 6-9 with score 6", () => {
    cy.mount(<ScoreMessage finalScore={6} />);
    cy.get("[data-cy='score-message']")
      .should("be.visible")
      .should("include.text", "6-9: ");
  });
  it("renders correct message for score 6-9 with score 9", () => {
    cy.mount(<ScoreMessage finalScore={9} />);
    cy.get("[data-cy='score-message']")
      .should("be.visible")
      .should("include.text", "6-9: ");
  });
  it("renders correct message for score 10-12 with score 10", () => {
    cy.mount(<ScoreMessage finalScore={10} />);
    cy.get("[data-cy='score-message']")
      .should("be.visible")
      .should("include.text", "10+: ");
  });
  it("renders correct message for score 10-12 with score 12", () => {
    cy.mount(<ScoreMessage finalScore={12} />);
    cy.get("[data-cy='score-message']")
      .should("be.visible")
      .should("include.text", "10+: ");
  });
});
