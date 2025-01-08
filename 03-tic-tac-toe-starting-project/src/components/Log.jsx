import React from 'react';

const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn, index) => {
        const { square, player } = turn;
        return (
          <li key={index}>
            {player} selected {square.row}, {square.col}
          </li>
        );
      })}
    </ol>
  );
};

export default Log;
