import { useEffect } from 'react';
import { useState } from 'react';

export default function ProgressBar({ timer, onTimeout, ...props }) {
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const timeout = setTimeout(onTimeout, timer);
    return () => clearTimeout(timeout);
  }, [onTimeout, timer]);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 30);
    }, 30);
    return () => clearInterval(interval);
  }, []);
  return (
    <progress value={remainingTime} max={timer} id="question-time" {...props} />
  );
}
