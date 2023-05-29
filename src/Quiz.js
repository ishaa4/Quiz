import React, { useState } from "react";
import "./QuizGame.css";

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question:
        "Who sang the title song for the latest Bond film, No Time to Die?",
      options: ["Adele", "Sam Smith", "Billie Eilish"],
      correctAnswer: "Billie Eilish"
    },
    {
      question: " What company makes the Xperia model of smartphone?",
      options: ["Samsung", "Sony", "Nokia"],
      correctAnswer: "Sony"
    },
    {
      question: "Where was the first example of paper money used?",
      options: ["China", "Turkey", "Greece"],
      correctAnswer: "China"
    },
    {
      question: "Which of the following languages has the longest alphabet?",
      options: ["Greek", "Russian", "Arabic"],
      correctAnswer: "Russian"
    },
    {
      question: "The fear of insects is known as what?",
      options: ["Entomophobia", "Arachnophobia", "Ailurophobia"],
      correctAnswer: "Entomophobia"
    },
    {
      question: "Which horoscope sign is a fish?",
      options: ["Aquarius", "Cancer", "Pisces"],
      correctAnswer: "Pisces"
    },
    {
      question: "What is the strongest muscle in the human body?",
      options: ["Jaw", "Heart", "Glutes"],
      correctAnswer: "Jaw"
    },
    {
      question: "Which of the following disorders is the fear of being alone?",
      options: ["Agoraphobia", "Aerophobia", "Acrophobia"],
      correctAnswer: "Agoraphobia"
    },
    {
      question: "Which of the following songs was the top-selling hit in 2019?",
      options: ["Someone You Loved", "Old Town Road", "I Don’t Care"],
      correctAnswer: "Someone You Loved"
    },
    {
      question: "What does the term “SOS” commonly stand for?",
      options: ["Save Our Ship", "Save Our Souls", "Save Our Sheep"],
      correctAnswer: "Save Our Souls"
    }
  ];

  const handleAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="QuizContainer">
      {showScore ? (
        <div className="score.section">
          You scored {score} out of {questions.length}
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].question}
          </div>
          <div className="answer-options">
            {questions[currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default QuizGame;
