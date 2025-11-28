import React from "react";
import ScoreMessage from "../../src/components/ScoreMessage.tsx";

describe("<ScoreMessage />", () => {
  it("renders", () => {
    cy.mount(<ScoreMessage finalScore={2} />);
    cy.get("[data-cy='result-gif']")
      .should("be.visible")
      .should("have.attr", "src")
      .and("include", "loser.gif");
  });
  it("renders", () => {
    cy.mount(<ScoreMessage finalScore={4} />);
    cy.get("[data-cy='result-gif']")
      .should("be.visible")
      .should("have.attr", "src")
      .and("include", "ok.gif");
  });
  it("renders", () => {
    cy.mount(<ScoreMessage finalScore={8} />);
    cy.get("[data-cy='result-gif']")
      .should("be.visible")
      .should("have.attr", "src")
      .and("include", "great.gif");
  });
  it("renders", () => {
    cy.mount(<ScoreMessage finalScore={10} />);
    cy.get("[data-cy='result-gif']")
      .should("be.visible")
      .should("have.attr", "src")
      .and("include", "legend.gif");
  });
});
