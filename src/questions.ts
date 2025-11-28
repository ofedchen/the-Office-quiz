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
      validate: (input: string) => boolean;
    };

type Gif = {
  gif: string;
};

export type QuestionStyled = Question & Gif;

export const questions: QuestionStyled[] = [
  {
    id: 1,
    type: "multiple-choice",
    question: "What is the name of Jim and Pam's daughter?",
    options: ["Peepa", "Peepee", "Cece", "Sylvio"],
    answer: "Cece",
    gif: "1.gif",
  },
  {
    id: 2,
    type: "true-false",
    question:
      "Dwight's tuxedo he is wearing in Casino Night is the one that his grandfather was buried in.",
    answer: true,
    gif: "2.gif",
  },
  {
    id: 3,
    type: "multi-select",
    question: "Which last names did Jan had?",
    options: ["Levinson", "Scott", "Moore", "Gould"],
    answers: ["Levinson", "Gould"],
    gif: "3.gif",
  },
  {
    id: 4,
    type: "open-question",
    question: "Which gas station always has yams?",
    validate: (answer) => {
      return answer.trim().toLowerCase() === "carbondale";
    },
    gif: "4.gif",
  },
  {
    id: 5,
    type: "multi-select",
    question: "Which are Michael's song parodies?",
    options: [
      "Total Eclipse of the Fart",
      "Whiny Dancer",
      "Beers in Heaven",
      "Everybody Burps",
    ],
    answers: ["Beers in Heaven", "Total Eclipse of the Fart"],
    gif: "5.gif",
  },
  {
    id: 6,
    type: "open-question",
    question:
      "Which movie did Pam's 'Mima' unwillingly watch in her hotel room at Niagara Falls?",
    validate: (answer) => {
      return answer.trim().toLowerCase() === "bruno";
    },
    gif: "6.gif",
  },
  {
    id: 7,
    type: "multiple-choice",
    question:
      "What is the name of the security guard who works in the building?",
    options: ["Hank", "Frank", "Charles", "Eddie"],
    answer: "Hank",
    gif: "7.gif",
  },
  {
    id: 8,
    type: "multi-select",
    question: "Which toppings did Michael have on his pretzel?",
    options: ["Mint chip", "Oreos", "Marshmallows", "Cinnamon sugar"],
    answers: ["Mint chip", "Oreos", "Marshmallows", "Cinnamon sugar"],
    gif: "8.gif",
  },
  {
    id: 9,
    type: "open-question",
    question:
      "What was the server password that Jim had to type in after the power went off?",
    validate: (answer) => {
      return answer.trim().toLowerCase() === "bigboobz";
    },
    gif: "9.gif",
  },
  {
    id: 10,
    type: "multi-select",
    question: "Who didn't invest in WUPHF.com?",
    options: ["Phyllis", "Andy", "Nellie", "Darryl"],
    answers: ["Phyllis", "Nellie"],
    gif: "10.gif",
  },
  {
    id: 11,
    type: "true-false",
    question:
      "One of the animals Michael mentions in the Fun Run episode has 'the head of a monkey, with the ears of a kangaroo, with… the body of a porcupine'",
    answer: false,
    gif: "11.gif",
  },
  {
    id: 12,
    type: "multiple-choice",
    question:
      "In the episode 'The Fire' who was Oscar's pick in the 'Who would you do?' game?",
    options: ["Ryan", "Kelly", "Jan", "Pam"],
    answer: "Pam",
    gif: "12.gif",
  },
];
