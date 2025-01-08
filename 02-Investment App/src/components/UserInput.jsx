import { useState } from 'react';

export default function UserInput({
  inputName,
  id,
  inputType = 'number',
  value,
  onInputChange,
}) {
  return (
    <span>
      <label htmlFor={id}>{inputName}</label>
      <input
        type={inputType}
        value={value}
        onChange={e => onInputChange(id, Number(e.target.value))}
        required
      />
    </span>
  );
}
