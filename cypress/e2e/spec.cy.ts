describe("The Office quiz", () => {
  it("visits my site", () => {
    cy.visit("/");
  });

  //h1 check
  it("visits the site and checks the heading 1 content", () => {
    cy.visit("/");
    cy.get("[data-cy='heading']").contains("Your ultimate The Office quiz");
  });

  //first question rendered
  it("visits the site and checks if the first question has been rendered with the correct question number and score equal to 0", () => {
    cy.visit("/");
    cy.get("[data-cy='question']")
      .find("[data-cy='q-number'")
      .contains("Question 1");
    cy.get("[data-cy='question']").find("[data-cy='currentScore']").contains(0);
  });

  // question rendered, button is disabled before the answer if picked/typed
  it("visits the site and checks if the question has been rendered and the button is disabled", () => {
    cy.visit("/");
    cy.get("[data-cy='question']")
      .find("button")
      .contains("Next")
      .should("be.disabled");
  });

  //
  // it("enables button after selecting an answer for question 1 (multiple choice)", () => {
  //   cy.visit("/");
  //   cy.get("[data-cy='question'][data-question-type='multiple-choice']").then(
  //     ($q) => {
  //       if ($q.length) {
  //         // Select first option
  //         cy.get("input[type='radio']").first().click();
  //         cy.contains("button", "Next").should("not.be.disabled");
  //       }
  //     }
  //   );
  // });

  // first question renders, pick answer or type answer - button becomes enabled, click and render the next question
  it("enables button after selecting or typing an answer, click renders the next question", () => {
    cy.visit("/");
    cy.get("[data-cy='question']").then(($question) => {
      const questionType = $question.attr("data-question-type");

      if (questionType === "multiple-choice" || questionType === "true-false") {
        cy.get("input[type='radio']").first().click();
      } else if (questionType === "multi-select") {
        cy.get("input[type='checkbox']").first().click();
      } else if (questionType === "open-question") {
        cy.get("input[type='text']").type("test answer");
      }

      cy.contains("button", "Next").should("not.be.disabled").click();
    });
    cy.get("[data-cy='question']").contains("[data-cy='q-number']", "Question 2");
  });

  // Intercept - get from api
  // it("tests multiple choice specifically", () => {
  //   cy.intercept("GET", "/api/questions", {
  //     fixture: "multiple-choice-first.json",
  //   });
  //   cy.visit("/");
  //   cy.get("[data-cy='question'][data-question-type='multiple-choice']").should(
  //     "exist"
  //   );
  //   cy.get("input[type='radio']").first().click();
  //   cy.contains("button", "Next").should("not.be.disabled");
  // });

  //display results check - question with index 11? or question number
});

//fetch

//button contains Next check

//button disabled

//select answer - button enabled

//correct answer / incorrect answer

//last question button finish check

//input field check

//checkboxes array check
