import React from "react";
import ScoreMessage from "../../src/components/ScoreMessage.tsx";

describe("<ScoreMessage />", () => {
  it("renders score 0-2 with score 2", () => {
    cy.mount(<ScoreMessage finalScore={2} />);
    cy.get("[data-cy='result-gif']")
      .should("be.visible")
      .should("have.attr", "src")
      .and("include", "loser.gif");
  });
  it("renders score 3-5 with score 3", () => {
    cy.mount(<ScoreMessage finalScore={3} />);
    cy.get("[data-cy='result-gif']")
      .should("be.visible")
      .should("have.attr", "src")
      .and("include", "ok.gif");
  });
  it("renders score 3-5 with score 5", () => {
    cy.mount(<ScoreMessage finalScore={5} />);
    cy.get("[data-cy='result-gif']")
      .should("be.visible")
      .should("have.attr", "src")
      .and("include", "ok.gif");
  });
  it("renders score 6-9 with score 6", () => {
    cy.mount(<ScoreMessage finalScore={6} />);
    cy.get("[data-cy='result-gif']")
      .should("be.visible")
      .should("have.attr", "src")
      .and("include", "great.gif");
  });
  it("renders score 6-9 with score 9", () => {
    cy.mount(<ScoreMessage finalScore={9} />);
    cy.get("[data-cy='result-gif']")
      .should("be.visible")
      .should("have.attr", "src")
      .and("include", "great.gif");
  });
  it("renders score 10-12 with score 10", () => {
    cy.mount(<ScoreMessage finalScore={10} />);
    cy.get("[data-cy='result-gif']")
      .should("be.visible")
      .should("have.attr", "src")
      .and("include", "legend.gif");
  });
});
