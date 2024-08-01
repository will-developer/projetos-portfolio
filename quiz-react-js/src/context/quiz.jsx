import { createContext, useReducer } from 'react';
import questions from '../data/questions';

const STAGES = ['Start', 'Playing', 'End'];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
};

const quizReducer = (state, action) => {
  let reorderedQuestions;
  let nextQuestion;

  console.log(state, action);
  switch (action.type) {
    case 'CHANGE_STATE':
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case 'REORDER_QUESTIONS':
      reorderedQuestions = questions.sort(() => Math.random() - 0.5);
      return {
        ...state,
        questions: reorderedQuestions,
      };

    case 'CHANGE_QUESTION':
      nextQuestion = state.currentQuestion + 1;
      return {
        ...state,
        currentQuestion: nextQuestion,
      };

    default:
      return state;
  }
};

export const QuizContext = createContext();

// eslint-disable-next-line react/prop-types
export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
