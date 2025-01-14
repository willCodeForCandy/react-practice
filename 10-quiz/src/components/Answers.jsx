import { useRef } from 'react';

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onAnswer,
}) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map(answer => {
        const isSelected = answer === selectedAnswer;

        return (
          <li key={answer} className={`answer`}>
            <button
              onClick={() => onAnswer(answer)}
              className={isSelected ? answerState : ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
