import React from 'react';

const Input = ({ type = 'text', children, id, textarea = false, ...props }) => {
  const classes =
    'flex-auto border-b-2 border-stone-300 text-stone-600 focus:outline-none rounded-md p-1 bg-stone-200 focus:border-stone-600';

  return (
    <p className="flex flex-col gap-1 my-4">
      <label
        htmlFor={id}
        className="text-sm font-bold text-stone-500 uppercase"
      >
        {children}
      </label>
      {textarea ? (
        <textarea className={classes} type={type} id={id} {...props} />
      ) : (
        <input className={classes} type={type} id={id} {...props} />
      )}
    </p>
  );
};

export default Input;
