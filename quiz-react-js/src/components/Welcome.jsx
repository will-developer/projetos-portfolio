import Quiz from '../img/quiz.svg';
import { QuizContext } from '../context/quiz';

import './Welcome.css';
import { useContext } from 'react';

const Welcome = () => {
  // eslint-disable-next-line no-unused-vars
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <button onClick={() => dispatch({ type: 'CHANGE_STATE' })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  );
};

export default Welcome;
