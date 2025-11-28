import { useState } from "react";
import type { QuestionStyled } from "../questions";

type Props = {
  q: QuestionStyled;
  onSubmit: (isCorrect: boolean) => void;
  last: boolean;
};

export default function MultipleChoice({ q, onSubmit, last }: Props) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  if (q.type !== "multiple-choice") return null;

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    const isCorrect = selectedAnswer === q.answer;
    onSubmit(isCorrect);
  };

  return (
    <div className="question-container" data-cy="multiple-choice">
      <h2>{q.question}</h2>
      <div className="options">
        {q.options.map((option) => (
          <label key={option} className="option radio">
            <input
              type="radio"
              name="multiple-choice"
              id={option}
              value={option}
              checked={selectedAnswer === option}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />
            {option}
          </label>
        ))}
      </div>
      <img src={q.gif} alt="some kind of the office gif" data-cy="q-gif" />
      <button
        onClick={handleSubmit}
        disabled={!selectedAnswer}
        data-cy="submit"
      >
        {!last ? "Next" : "Finish quiz"}
      </button>
    </div>
  );
}
