import React from "react";
import QuestionRenderer from "../../src/components/QuestionRenderer.tsx";

describe("<QuestionRenderer />", () => {
  it("renders some question", () => {
    const onSubmitSpy = cy.spy().as("onSubmitSpy");
    const qcy = {
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
        q={qcy}
      />
    );
  });

  it("renders last question", () => {
    const onSubmitSpy = cy.spy().as("onSubmitSpy");
    const qcy = {
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
        q={qcy}
        last={true}
      />
    );
    cy.get("[data-cy='question']").find('button').should("have.text", "Finish quiz")
  });
});
