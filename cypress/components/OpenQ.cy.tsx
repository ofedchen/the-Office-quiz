import React from "react";
import OpenQ from "../../src/components/OpenQ.tsx";

describe("<OpenQ />", () => {
  it("renders, correct input type, button enabled after typing", () => {
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
    cy.mount(<OpenQ q={testQ} onSubmit={onSubmitSpy} last={true} />);
    cy.get("[data-cy='open-question']")
      .find("input[type='text']")
      .type("bigboobz");
    cy.get("[data-cy='submit")
      .should("not.be.disabled")
      .should("have.text", "Finish quiz")
      .click();
  });
});
