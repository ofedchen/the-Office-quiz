Feature: Taking The Office Quiz

Scenario: Starting the quiz
Given I visit the quiz start page
When I see the heading
Then the text is "Your ultimate The Office quiz"

Scenario: Answering the first question correctly, go to the next, update score
Given first question is displayed
When I answer the first question correctly
Then the button should become enabled
And click renders the next question and my score should update accordingly

Scenario: Answering all questions and completing the quiz
Given I am on the last question
When I submit my answer
Then I should see my final score and a result message
And I should see a result gif appropriate for my score
