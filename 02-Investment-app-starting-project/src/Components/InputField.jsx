import React, { useState } from 'react';

const InputField = ({
  type = 'number',
  id,
  children,
  onValueChange,
  initialValue,
}) => {
  const [inputValue, setValue] = useState(initialValue);
  const handleInputChange = (inputVal, inputId) => {
    setValue(inputVal);
    onValueChange(inputId, inputVal);
  };
  return (
    <p>
      <label htmlFor={id}>{children}</label>
      <input
        type={type}
        id={id}
        value={inputValue}
        onChange={e => handleInputChange(e.target.value, id)}
      />
    </p>
  );
};

export default InputField;
