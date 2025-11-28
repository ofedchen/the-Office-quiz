import React from "react";
import QuestionRenderer from "../../src/components/QuestionRenderer.tsx";

describe("<QuestionRenderer />", () => {
  it("renders an open question", () => {
    const onSubmitSpy = cy.spy().as("onSubmitSpy");
    const testQ = {
      id: 9,
      type: "open-question",
      question:
        "What was the server password that Jim had to type in after the power went off?",
      validate: (answer: string) => {
        return answer.toLowerCase() === "bigboobz";
      },
      gif: "9.gif",
    };

    cy.mount(
      <QuestionRenderer
        score={2}
        questionNumber={3}
        onSubmit={onSubmitSpy}
        q={testQ}
      />
    );
    cy.get("[data-cy='open-question']").should("exist");
    cy.get("[data-cy='question']").find("input[type='text']");
  });

  it("renders a multiple-choice question", () => {
    const onSubmitSpy = cy.spy().as("onSubmitSpy");
    const testQ = {
      id: 12,
      type: "multiple-choice",
      question:
        "In the episode 'The Fire' who was Oscar's pick in the 'Who would you do?' game?",
      options: ["Ryan", "Kelly", "Jan", "Pam"],
      answer: "Pam",
      gif: "12.gif",
    };

    cy.mount(
      <QuestionRenderer
        score={2}
        questionNumber={3}
        onSubmit={onSubmitSpy}
        q={testQ}
        last={true}
      />
    );
    cy.get("[data-cy='multiple-choice']").should("exist");
    cy.get("[data-cy='options']")
      .find("input[type='radio']")
      .should("have.length", 4);
  });

  it("renders a multiselect question", () => {
    const onSubmitSpy = cy.spy().as("onSubmitSpy");
    const testQ = {
      id: 8,
      type: "multi-select",
      question: "Which toppings did Michael have on his pretzel?",
      options: ["Mint chip", "Oreos", "Marshmallows", "Cinnamon sugar"],
      answers: ["Mint chip", "Oreos", "Marshmallows", "Cinnamon sugar"],
      gif: "8.gif",
    };
    cy.mount(
      <QuestionRenderer
        score={2}
        questionNumber={3}
        onSubmit={onSubmitSpy}
        q={testQ}
        last={true}
      />
    );
    cy.get("[data-cy='multi-select']").should("exist");
    cy.get("[data-cy='options']")
      .find("input[type='checkbox']")
      .should("have.length", 4);
  });

  it("renders a true-false question", () => {
    const onSubmitSpy = cy.spy().as("onSubmitSpy");
    const testQ = {
      id: 2,
      type: "true-false",
      question:
        "Dwight's tuxedo he is wearing in Casino Night is the one that his grandfather was buried in.",
      answer: true,
      gif: "2.gif",
    };

    cy.mount(
      <QuestionRenderer
        score={2}
        questionNumber={3}
        onSubmit={onSubmitSpy}
        q={testQ}
        last={true}
      />
    );
    cy.get("[data-cy='true-false']").should("exist");
    cy.get("[data-cy='options']")
      .find("input[type='radio']")
      .should("have.length", 2);
  });

  it("renders correct question number - 3", () => {
    const onSubmitSpy = cy.spy().as("onSubmitSpy");
    const testQ = {
      id: 2,
      type: "true-false",
      question:
        "Dwight's tuxedo he is wearing in Casino Night is the one that his grandfather was buried in.",
      answer: true,
      gif: "2.gif",
    };

    cy.mount(
      <QuestionRenderer
        score={2}
        questionNumber={3}
        onSubmit={onSubmitSpy}
        q={testQ}
        last={true}
      />
    );
    cy.get("[data-cy='q-number']").should("have.text", "Question 3");
  });

  it("renders correct score - 9", () => {
    const onSubmitSpy = cy.spy().as("onSubmitSpy");
    const testQ = {
      id: 2,
      type: "true-false",
      question:
        "Dwight's tuxedo he is wearing in Casino Night is the one that his grandfather was buried in.",
      answer: true,
      gif: "2.gif",
    };

    cy.mount(
      <QuestionRenderer
        score={9}
        questionNumber={3}
        onSubmit={onSubmitSpy}
        q={testQ}
        last={true}
      />
    );
    cy.get("[data-cy='currentScore']").should("have.text", "Score: 9");
  });
});
