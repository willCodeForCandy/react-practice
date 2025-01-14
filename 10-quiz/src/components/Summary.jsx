import quizComplete from '../assets/quiz-complete.png';
import QUESTIONS from '../data/questions';
export default function Summary({ userAnswers }) {
  const summary = {
    skipped: 0,
    correct: 0,
    wrong: 0,
  };
  userAnswers.map((answer, index) => {
    if (answer === null) {
      summary.skipped++;
    } else if (answer === QUESTIONS[index].answers[0]) {
      summary.correct++;
    } else {
      summary.wrong++;
    }
  });
  return (
    <div id="summary">
      <h2>Quiz completed!</h2>
      <img src={quizComplete} alt="Trophy" />
      <div id="summary-stats">
        <p>
          <span className="text">Right answers:</span>
          <span className="number">
            {Math.round((summary.correct / userAnswers.length) * 100) + '%'}
          </span>{' '}
        </p>
        <p>
          <span className="text">Wrong answers:</span>
          <span className="number">
            {Math.round((summary.wrong / userAnswers.length) * 100) + '%'}
          </span>
        </p>
        <p>
          <span className="text">Skipped answers:</span>
          <span className="number">
            {Math.round((summary.skipped / userAnswers.length) * 100) + '%'}
          </span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClasses = 'user-answer';
          if (answer === QUESTIONS[index].answers[0]) {
            cssClasses += ' correct';
          } else if (answer === null) {
            cssClasses += ' skipped';
          } else {
            cssClasses += ' wrong';
          }
          return (
            <li key={QUESTIONS[index].id}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClasses}>
                {answer ? answer : 'Skipped question'}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
