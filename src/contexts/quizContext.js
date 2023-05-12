import { createContext, useReducer } from "react";

import questions from "../data/questions";

const STAGES = ["Start", "Playing", "End"];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  selectedAnswer: false,
};

const quizReducer = (state, action) => {

  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      };
    case "REORDER_QUESTIONS":
      const reorderedQuestions = questions.sort(() => Math.random()-0.5)
      return {
        ...state,
        questions: reorderedQuestions,
      };
    case "CHANGE_QUESTION":
      const nextQuestion= state.currentQuestion+1;
      let isOver = false;

      if (!questions[nextQuestion]) isOver = true;

      return{
        ...state,
        currentQuestion: nextQuestion,
        gameStage: isOver ? STAGES[2] : state.gameStage,
        selectedAnswer: false,
      };
    case "NEW_GAME":
      return initialState;
    case "CHECK_ANSWER":
      if (state.selectedAnswer) return state;
      
      const answer = action.payload.answer
      const option = action.payload.option
      let isCorrect = 0;
      if (answer === option) isCorrect = 1;

      return {
        ...state,
        score: state.score + isCorrect,
        selectedAnswer: option,
      }
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
