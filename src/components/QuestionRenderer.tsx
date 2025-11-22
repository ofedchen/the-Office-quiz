import type { QuestionStyled } from "../questions";
import MultipleChoice from "./MultipleChoice";
import MultiSelect from "./MultiSelect";
import OpenQ from "./OpenQ";
import TrueFalse from "./TrueFalse";

type Props = {
  q: QuestionStyled;
  onSubmit: (isCorrect: boolean) => void;
  last?: boolean;
};

export default function QuestionRenderer({ q, onSubmit, last }: Props) {
  switch (q.type) {
    case "multiple-choice":
      return <MultipleChoice q={q} onSubmit={onSubmit} last={last ? last : false} />;
    case "true-false":
      return <TrueFalse q={q} onSubmit={onSubmit} last={last ? last : false} />;
    case "multi-select":
      return (
        <MultiSelect q={q} onSubmit={onSubmit} last={last ? last : false} />
      );
    case "open-question":
      return <OpenQ q={q} onSubmit={onSubmit} last={last ? last : false} />;
  }
}
