

import React, { useState, useCallback, useMemo } from 'react';

interface QuizProps {
  quizData: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
}

const Quiz: React.FC<QuizProps> = ({ quizData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<(string | null)[]>(() => Array(quizData.length).fill(null));
  const [submittedAnswers, setSubmittedAnswers] = useState<(string | null)[]>(() => Array(quizData.length).fill(null));
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = useCallback((option: string) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = option;
    setSelectedOptions(newSelectedOptions);
  }, [currentQuestionIndex, selectedOptions]);

  const handleSubmit = useCallback(() => {
    const selectedOption = selectedOptions[currentQuestionIndex];
    if (selectedOption === null) return;

    const newSubmittedAnswers = [...submittedAnswers];
    newSubmittedAnswers[currentQuestionIndex] = selectedOption;
    setSubmittedAnswers(newSubmittedAnswers);

    if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  }, [currentQuestionIndex, selectedOptions, submittedAnswers, quizData, score]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  }, [currentQuestionIndex, quizData.length]);

  const handlePrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }, [currentQuestionIndex]);

  const handleRetakeQuiz = useCallback(() => {
    setCurrentQuestionIndex(0);
    setSelectedOptions(Array(quizData.length).fill(null));
    setSubmittedAnswers(Array(quizData.length).fill(null));
    setScore(0);
    setShowResults(false);
  }, [quizData.length]);

  const wrongAnswers = useMemo(() => {
    if (!showResults) return [];
    return quizData.filter((_, index) => submittedAnswers[index] !== quizData[index].correctAnswer);
  }, [showResults, submittedAnswers, quizData]);

  if (showResults) {
    return (
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-2xl max-w-2xl mx-auto mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">Quiz Results</h2>
        <p className="text-xl mb-4 text-center">Your Score: <span className="font-bold text-green-400">{score}</span> / {quizData.length}</p>
        
        {wrongAnswers.length > 0 && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-red-400">Incorrectly Answered:</h3>
            <ul className="space-y-4">
              {wrongAnswers.map((question, index) => (
                <li key={index} className="bg-gray-700 p-4 rounded-md">
                  <p className="font-semibold">{question.question}</p>
                  <p className="text-red-300">Your Answer: {submittedAnswers[quizData.indexOf(question)]}</p>
                  <p className="text-green-300">Correct Answer: {question.correctAnswer}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="text-center">
          <button onClick={handleRetakeQuiz} className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300">
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];
  const selectedOption = selectedOptions[currentQuestionIndex];
  const submittedOption = submittedAnswers[currentQuestionIndex];

  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-2xl max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-2">Question {currentQuestionIndex + 1}/{quizData.length}</h2>
      <p className="text-lg mb-6 text-gray-300">{currentQuestion.question}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {currentQuestion.options.map((option, index) => {
          const isSelected = selectedOption === option;
          const isSubmitted = submittedOption === option;
          const isCorrect = currentQuestion.correctAnswer === option;
          let buttonClass = "bg-gray-700 hover:bg-gray-600";

          if (submittedOption) {
            if (isSubmitted) {
              buttonClass = isCorrect ? "bg-green-500" : "bg-red-500";
            } else if (isCorrect) {
              buttonClass = "bg-green-500";
            }
          } else if (isSelected) {
            buttonClass = "bg-cyan-600";
          }

          return (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              disabled={submittedOption !== null}
              className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${buttonClass} disabled:cursor-not-allowed`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="flex justify-between items-center">
        <button 
          onClick={handlePrevious} 
          disabled={currentQuestionIndex === 0}
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg disabled:bg-gray-700 disabled:cursor-not-allowed transition-colors duration-300"
        >
          Previous
        </button>

        {submittedOption ? (
          <button 
            onClick={handleNext}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
          >
            {currentQuestionIndex < quizData.length - 1 ? 'Next Question' : 'Finish'}
          </button>
        ) : (
          <button 
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg disabled:bg-gray-700 disabled:cursor-not-allowed transition-colors duration-300"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;

