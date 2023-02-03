import React, { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    id: 2,
    question: "What is Virtual DOM in React?",
    answer:
      "Virtual DOM is a lightweight in-memory representation of the actual DOM, which is used by React to determine what changes need to be made to the actual DOM."
  },
  {
    id: 3,
    question: "What is JSX in React?",
    answer:
      "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code. It's used by React to define UI components."
  }
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setShowAnswer(false);
  };

  return (
    <div>
      <h1>React Quiz</h1>
      <p>Question {currentQuestion + 1} of {questions.length}:</p>
      <p>{questions[currentQuestion].question}</p>
      {showAnswer ? (
        <p>
          <strong>Answer:</strong> {questions[currentQuestion].answer}
        </p>
      ) : (
        <button onClick={handleShowAnswer}>Show Answer</button>
      )}
      {currentQuestion < questions.length - 1 && (
        <button onClick={handleNextQuestion}>Next Question</button>
      )}
    </div>
  );
}

export default QuizApp;


