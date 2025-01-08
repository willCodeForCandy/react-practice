import { useState } from 'react';
import Results from './components/ResultsTable';
import UserInput from './components/UserInput';

const INITIAL_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 300,
  expectedReturn: 5.5,
  duration: 12,
};

function App() {
  const [investmentData, setInvestmentData] = useState(INITIAL_VALUES);
  function handleInputChange(inputName, inputValue) {
    setInvestmentData(oldData => {
      return { ...oldData, [inputName]: inputValue };
    });
  }
  const inputIsValid = investmentData.duration > 0;
  return (
    <>
      <form id="user-input">
        <span className="input-group">
          <UserInput
            inputName={'Initial Investment'}
            value={investmentData.initialInvestment}
            id={'initialInvestment'}
            onInputChange={handleInputChange}
          />
          <UserInput
            inputName={'Annual Investment'}
            value={investmentData.annualInvestment}
            id={'annualInvestment'}
            onInputChange={handleInputChange}
          />
        </span>
        <span className="input-group">
          <UserInput
            inputName={'Expected Return'}
            value={investmentData.expectedReturn}
            id={'expectedReturn'}
            onInputChange={handleInputChange}
          />
          <UserInput
            inputName={'Duration'}
            value={investmentData.duration}
            id={'duration'}
            onInputChange={handleInputChange}
          />
        </span>
      </form>
      {inputIsValid ? (
        <Results data={investmentData} />
      ) : (
        <p className="center">Duration should be 1 or greater</p>
      )}
    </>
  );
}

export default App;
