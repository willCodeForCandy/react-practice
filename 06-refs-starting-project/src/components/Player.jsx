import { useState, useRef } from 'react';

export default function Player() {
  const [playerName, setPlayerName] = useState('Player');
  const input = useRef();
  function handleClick() {
    setPlayerName(input.current.value);
    input.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" ref={input} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
