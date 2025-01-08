import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
const ResultModal = ({ targetTime, ref, remainingTime, onClose }) => {
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onClose}>
      <h2>{userLost ? 'You Lost!' : 'YOU WON!'}</h2>
      {!userLost && <h3>Your score is {score}</h3>}
      <p>
        The target time was <strong>{targetTime}</strong>
      </p>
      <p>
        You stopped the timer with{' '}
        <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
};

export default ResultModal;
