import { useState } from 'react';

const Player = ({ initialName, symbol, isActive, onNameChange }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    // setIsEditing(!isEditing); //!Cuando el nuevo estado depende del estado anterior, en lugar de usar ! directamente, hay que hacer una funcion para asegurarnos de tener el valor actualizado. isEditing en este caso toma el valor INICIAL, independientemente del momento en el que se ejecuta. Con la función, el valor se actualiza en el momento que corre la función
    setIsEditing(editing => !editing); //? BEST PRACTICE!
    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  };

  const handleChange = e => {
    setPlayerName(e.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
      //2 way binding: recibo el dato con el onChange, y a su vez lo devuelvo como value
    );
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;
