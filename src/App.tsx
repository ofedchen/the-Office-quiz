import { useState, useEffect } from "react";
import { questions } from "./questions";
import "./App.css";
import QuestionRenderer from "./components/QuestionRenderer";
import ScoreMessage from "./components/ScoreMessage";

function App() {
  const [score, setScore] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isLast, setIsLast] = useState<boolean>(false);

  useEffect(() => {
    questions.forEach(q => {
      const img = new Image();
      img.src = q.gif;
    });
  }, []);

  function handleAnswer(isCorrect: boolean): void {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      if (currentIndex === questions.length - 2) setIsLast(true);
    } else {
      setShowResults(true);
    }
  }

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
            {...(isLast && { last: isLast })}
            score={score}
            questionNumber={currentIndex+1}
          />
        ) : (
          <ScoreMessage finalScore={score} />
        )}
      </main>
    </>
  );
}

export default App;
