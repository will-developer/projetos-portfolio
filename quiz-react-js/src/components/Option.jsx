import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './Option.css';

// eslint-disable-next-line react/prop-types
const Option = ({ option, selectOption, answer }) => {
  // eslint-disable-next-line no-unused-vars
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div
      className={`option ${
        quizState.answerSelected && option === answer ? 'correct' : ''
      }
      ${quizState.answerSelected && option !== answer ? 'wrong' : ''}
        `}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;
