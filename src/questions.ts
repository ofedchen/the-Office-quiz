type Question =
  | {
      id: number;
      type: "multiple-choice";
      question: string;
      options: string[];
      answer: string;
    }
  | {
      id: number;
      type: "true-false";
      question: string;
      answer: boolean;
    }
  | {
      id: number;
      type: "multi-select";
      question: string;
      options: string[];
      answers: string[];
    }
  | {
      id: number;
      type: "open-question";
      question: string;
      answer: string;
    };

type Gif = {
  gif: string;
};

export type QuestionStyled = Question & Gif;