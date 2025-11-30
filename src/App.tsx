import { useState, useEffect } from "react";
import "./App.css";
import QuestionRenderer from "./components/QuestionRenderer";
import ScoreMessage from "./components/ScoreMessage";
import type { QuestionStyled } from "./questions";

function App() {
  const [questions, setQuestions] = useState<QuestionStyled[] | null>(null);
  const [score, setScore] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);

  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  useEffect(() => {
    if (questions) {
      questions.forEach((q) => {
        const img = new Image();
        img.src = q.gif;
      });
    }
  }, [questions]);

  function handleAnswer(isCorrect: boolean): void {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (questions && currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  }

  if (!questions) return <div>Loading...</div>;
  else
    return (
      <>
        <header>
          <h1 data-cy="heading">Your ultimate The Office quiz</h1>
        </header>
        <main>
          {!showResults ? (
            <QuestionRenderer
              q={questions[currentIndex]}
              onSubmit={handleAnswer}
              last={questions && currentIndex === questions.length - 1}
              score={score}
              questionNumber={currentIndex + 1}
            />
          ) : (
            <ScoreMessage finalScore={score} />
          )}
        </main>
      </>
    );
}

export default App;
