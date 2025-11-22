import { useState } from "react";
import type { QuestionStyled } from "../questions";

type Props = {
  q: QuestionStyled;
  onSubmit: (isCorrect: boolean) => void;
  last: boolean;
};

export default function OpenQ({ q, onSubmit, last }: Props) {
  const [answer, setAnswer] = useState<string>("");

  if (q.type !== "open-question") return null;

  const handleSubmit = () => {
    if (!answer) return;
    const isCorrect = q.validate(answer);
    onSubmit(isCorrect);
  };

  return (
    <>
      <div className="question-container">
        <h2>{q.question}</h2>
        <label htmlFor="answer-line" className="openQ-label">
          Your answer:
          <input
            name="answer-line"
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </label>
        <img src={q.gif} alt="some kind of the office gif" />
        <button onClick={handleSubmit} disabled={!answer}>
          {!last ? "Next" : "Finish quiz"}
        </button>
      </div>
    </>
  );
}
