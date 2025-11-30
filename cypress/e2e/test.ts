import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
  cy.fixture("test-questions.json").as("questions");
  cy.intercept("GET", "/questions.json", { fixture: "test-questions.json" });
  cy.visit("/");
});

// Scenario: Starting the quiz
Given("I visit the quiz start page", () => {
  cy.visit("/");
});

When("I see the heading", () => {
  cy.get("h1").should("be.visible");
});

Then('the text is "Your ultimate The Office quiz"', () => {
  cy.get("h1").should("contain", "Your ultimate The Office quiz");
});

// Scenario: Answering the first question correctly, go to the next, update score
Given("first question is displayed", () => {
  cy.get("[data-cy='question']")
    .should("be.visible")
    .find("[data-cy='q-number']")
    .contains("Question 1");
});

When("I answer the first question correctly", function () {
  const firstQuestion = this.questions[0];
  cy.contains(firstQuestion.answer).click();
});

Then("the button should become enabled", () => {
  cy.get("[data-cy='submit']")
    .should("not.be.disabled")
    .should("contain", "Next");
});
Then(
  "click renders the next question and my score should update accordingly",
  () => {
    cy.get("[data-cy='submit']").click();
    cy.get("[data-cy='question']")
      .should("be.visible")
      .find("[data-cy='q-number']")
      .contains("Question 2");
    cy.get("[data-cy='currentScore']").should("exist").contains(1);
  }
);

// Scenario: Answering all questions and completing the quiz
Given("I am on the last question", function () {
  cy.get("@questions").then((questions) => {
    for (let i = 0; i < questions.length - 1; i++) {
      cy.get("[data-cy='question']").should("be.visible");
      cy.get("input").first().click();
      cy.get("[data-cy='submit']").should("not.be.disabled").click();
    }

    const lastQuestion = this.questions[questions.length - 1]!;
    cy.get("[data-cy='question']")
      .should("be.visible")
      .find("[data-cy='q-number']")
      .contains(`Question ${questions.length}`);
    cy.get("input[type='text']").type(lastQuestion.answer);
  });
});

When("I submit my answer", () => {
  cy.get("button")
    .should("not.be.disabled")
    .click();
});

Then("I should see my final score and a result message", () => {
  cy.get("[data-cy='final-score']").should("be.visible").should("contain", "Your score: 2");
});

Then("I should see a result gif appropriate for my score", () => {
  cy.get("[data-cy='result-gif']").should("be.visible").should("have.attr", "src", "loser.gif");
});
