import { useState } from "react";
import type { QuestionStyled } from "../questions";

type Props = {
  q: QuestionStyled;
  onSubmit: (isCorrect: boolean) => void;
  last: boolean;
};

export default function MultiSelect({ q, onSubmit, last }: Props) {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  if (q.type !== "multi-select") return null;

  const updateAnswers = (answer: string) => {
    if (selectedAnswers.includes(answer)) {
      setSelectedAnswers((prev) => prev.filter((a) => a !== answer));
    } else {
      setSelectedAnswers((prev) => [...prev, answer]);
    }
  };

  const handleSubmit = () => {
    if (!selectedAnswers.length) return;

    const isCorrect =
      q.answers.length === selectedAnswers.length &&
      q.answers.every((answer) => selectedAnswers.includes(answer));

    onSubmit(isCorrect);
  };

  return (
    <>
      <div className="question-container" data-cy="multi-select">
        <h2>{q.question}</h2>
        <div className="options">
          {q.options.map((option) => (
            <label key={option} className="option">
              <input
                type="checkbox"
                name="multi-select"
                id={option}
                value={option}
                checked={selectedAnswers.includes(option)}
                onChange={(e) => updateAnswers(e.target.value)}
              />
              {option}
            </label>
          ))}
        </div>
        <img src={q.gif} alt="some kind of the office gif" data-cy="q-gif" />
        <button
          onClick={handleSubmit}
          disabled={!selectedAnswers.length}
          data-cy="submit"
        >
          {!last ? "Next" : "Finish quiz"}
        </button>
      </div>
    </>
  );
}
