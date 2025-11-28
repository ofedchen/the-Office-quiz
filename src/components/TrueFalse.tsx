import { useState } from "react";
import type { QuestionStyled } from "../questions";

type Props = {
  q: QuestionStyled;
  onSubmit: (isCorrect: boolean) => void;
  last: boolean;
};

export default function TrueFalse({ q, onSubmit, last }: Props) {
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

  if (q.type !== "true-false") return null;

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    const isCorrect = selectedAnswer === q.answer;
    onSubmit(isCorrect);
  };

  return (
    <>
      <div className="question-container" data-cy="true-false">
        <h2>{q.question}</h2>
        <div className="options" data-cy="options">
          <label className="option">
            <input
              type="radio"
              name="true-false"
              value="true"
              checked={selectedAnswer === true}
              onChange={() => setSelectedAnswer(true)}
            />
            True
          </label>
          <label className="option">
            <input
              type="radio"
              name="true-false"
              value="false"
              checked={selectedAnswer === false}
              onChange={() => setSelectedAnswer(false)}
            />
            False
          </label>
        </div>
        <img src={q.gif} alt="some kind of the office gif" data-cy="q-gif" />
        <button
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          data-cy="submit"
        >
          {!last ? "Next" : "Finish quiz"}
        </button>
      </div>
    </>
  );
}
