import InputField from './InputField';

const InputForm = ({ handleValueChange, initialValues }) => {
  return (
    <form id="user-input">
      <div className="input-group">
        <InputField
          id="initialInvestment"
          onValueChange={handleValueChange}
          initialValue={initialValues.initialInvestment}
        >
          Initial Investment
        </InputField>
        <InputField
          id="annualInvestment"
          onValueChange={handleValueChange}
          initialValue={initialValues.annualInvestment}
        >
          Annual Investment
        </InputField>
      </div>
      <div className="input-group">
        <InputField
          id="expectedReturn"
          onValueChange={handleValueChange}
          initialValue={initialValues.expectedReturn}
        >
          Expected Return
        </InputField>
        <InputField
          id="duration"
          onValueChange={handleValueChange}
          initialValue={initialValues.duration}
        >
          Duration
        </InputField>
      </div>
    </form>
  );
};

export default InputForm;
