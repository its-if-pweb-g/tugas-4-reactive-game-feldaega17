import React, { useState } from "react";
import { questions } from "./data";
import Question from "./Question";

interface AnswerSummary {
  question: string;
  selectedAnswer: string;
  correctAnswer: string;
}

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answers, setAnswers] = useState<AnswerSummary[]>([]);
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const startQuiz = () => {
    setIsQuizStarted(true);
  };

  const handleAnswer = (selectedAnswer: string) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }

    setAnswers([
      ...answers,
      {
        question: currentQuestion.question,
        selectedAnswer,
        correctAnswer: currentQuestion.answer,
      },
    ]);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setIsFinished(true);
    }
  };

  const correctAnswersCount = answers.filter(answer => answer.selectedAnswer === answer.correctAnswer).length;
  const incorrectAnswersCount = answers.length - correctAnswersCount;

  return (
    <div>
      <h1>Quiz App</h1>
      {isQuizStarted ? (
        isFinished ? (
          <div>
            <h2>Skor kamu: {score} / {questions.length} ({(score / questions.length) * 100}%)</h2>
            <p>Jawaban benar: {correctAnswersCount}</p>
            <p>Jawaban salah: {incorrectAnswersCount}</p>
          </div>
        ) : (
          <Question
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            onAnswer={handleAnswer}
          />
        )
      ) : (
        <div style={{
          textAlign: "center", 
          marginTop: "50px", 
          padding: "20px", 
          border: "2px solid white", 
          backgroundColor: "#333", 
          color: "white", 
          borderRadius: "8px"
        }}>
          <h2>Selamat Datang di Quiz App!</h2>
          <p>Tekan tombol di bawah ini untuk memulai kuis.</p>
          <button 
            onClick={startQuiz} 
            style={{
              padding: "10px 20px", 
              fontSize: "16px", 
              backgroundColor: "#4CAF50", 
              color: "white", 
              border: "none", 
              borderRadius: "5px", 
              cursor: "pointer"
            }}
          >
            Mulai
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
