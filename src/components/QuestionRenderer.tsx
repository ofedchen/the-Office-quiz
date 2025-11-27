import type { QuestionStyled } from "../questions";
import MultipleChoice from "./MultipleChoice";
import MultiSelect from "./MultiSelect";
import OpenQ from "./OpenQ";
import TrueFalse from "./TrueFalse";

type Props = {
  q: QuestionStyled;
  onSubmit: (isCorrect: boolean) => void;
  last?: boolean;
  score: number;
  questionNumber: number;
};

export default function QuestionRenderer({
  q,
  onSubmit,
  last,
  score,
  questionNumber,
}: Props) {
  function renderQuestion() {
    switch (q.type) {
      case "multiple-choice":
        return (
          <MultipleChoice
            q={q}
            onSubmit={onSubmit}
            last={last ? last : false}
          />
        );
      case "true-false":
        return (
          <TrueFalse q={q} onSubmit={onSubmit} last={last ? last : false} />
        );
      case "multi-select":
        return (
          <MultiSelect q={q} onSubmit={onSubmit} last={last ? last : false} />
        );
      case "open-question":
        return <OpenQ q={q} onSubmit={onSubmit} last={last ? last : false} />;
    }
  }

  return (
    <div className="question-wrapper" data-cy="question" data-question-type={q.type}>
      <h2 data-cy="q-number">Question {questionNumber}</h2>
      <p data-cy="currentScore">Score: {score}</p>
      {renderQuestion()}
    </div>
  );
}
