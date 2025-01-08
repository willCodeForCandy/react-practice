import React from 'react';

const Button = ({
  children,
  action = () => {},
  secondary = false,
  ...props
}) => {
  const buttonColors = secondary
    ? 'text-zinc-800 hover:text-zinc-950'
    : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600 hover:text-zinc-100';
  return (
    <button
      className={
        'rounded-md text-xs md:text-base  py-2 px-4 my-4 ' + buttonColors
      }
      onClick={e => {
        e.preventDefault();
        action(e);
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
