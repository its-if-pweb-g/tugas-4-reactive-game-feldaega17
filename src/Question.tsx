import React from "react";
import { motion } from "framer-motion"; // Untuk animasi

interface QuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, onAnswer }) => {
  return (
    <motion.div
  className="question-container"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 50 }}
  transition={{ duration: 0.5 }}
>
      <h2>{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onAnswer(option)}
            className="option-btn"
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default Question;
