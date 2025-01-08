const GameBoard = ({ onSquareSelect, board }) => {
  //? Lógica previa para manejar los turnos
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // const handleSelectSquare = (rowIndex, colIndex) => {
  //   setGameBoard(previousGameBoard => {
  //     const updatedBoard = [
  //       ...previousGameBoard.map(innerArray => [...innerArray]),
  //     ];
  //     //! Los states que dependen de objects o arrays (mutables) deben actualizarse de forma inmutable (sin cambiar el array/objeto original). Para eso, primero hay que crear una copia del array original, que es el dato que vamos a modificar
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSquareSelect();
  // };
  return (
    <>
      <ol id="game-board">
        {board.map((row, rowIndex) => {
          return (
            <ol key={rowIndex}>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => onSquareSelect(rowIndex, colIndex)}
                    disabled={playerSymbol !== null}
                  >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          );
        })}
      </ol>
    </>
  );
};

export default GameBoard;
