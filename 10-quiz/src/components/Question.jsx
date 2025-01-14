import { useState } from 'react';
import QUESTIONS from '../data/questions.js';
import Answers from './Answers.jsx';
import ProgressBar from './ProgressBar.jsx';

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });
  let timer = 10000;
  function handleSelectAnswer(answer) {
    setAnswer({ selectedAnswer: answer, isCorrect: null });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[index].answers[0],
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = '';

  if (answer.selectedAnswer) {
    if (answer.isCorrect === null) {
      answerState = 'selected';
      timer = 1000;
    } else {
      answerState = answer.isCorrect ? 'correct' : 'wrong';
      timer = 2000;
    }
  }

  return (
    <div id="question">
      <ProgressBar
        timer={timer}
        key={timer}
        onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
        className={answer.selectedAnswer ? 'answered' : ''}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        onAnswer={handleSelectAnswer}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
      />
    </div>
  );
}
