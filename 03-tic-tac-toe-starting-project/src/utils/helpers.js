import { WINNING_COMBINATIONS } from '../winning-combinations';

export const deriveActivePlayer = gameTurns => {
  let currentPlayer = 'X';

  if (gameTurns.length !== 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
};

export const deriveWinner = (gameBoard, players) => {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
};

export const deriveGameboard = (gameTurns, initialGameBoard) => {
  let gameBoard = [...initialGameBoard.map(array => [...array])];
  //Creo una copia del INITIAL_GAME_BOARD para no modificar el array original y poder usarlo después. Uso doble spread porque son arrays dentro de un array.
  //! Derived state
  //En este caso, no hacemos un useState, porque los cambios de esta variable se determinan a partir de otro estado.
  //? La intención es usar siempre la menor cantidad posible de estados y computarlos.
  //Computamos el valor de gameTurns con el forof loop para actualizar la variable gameBoard.
  for (const turn of gameTurns) {
    //si turns es un array vacío, el loop forof no inicia (porque js funciona así)
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
};
