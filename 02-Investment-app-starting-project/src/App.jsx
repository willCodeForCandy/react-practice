import { useState } from 'react';
import Header from './Components/Header';
import InputForm from './Components/InputForm';
import ResultsTable from './Components/ResultsTable';

function App() {
  const initialValues = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  };
  const [outputValues, setOutputValues] = useState(initialValues);
  const setNewValues = (inputName, inputValue) => {
    setOutputValues(oldValues => {
      return { ...oldValues, [inputName]: Number(inputValue) };
    });
  };

  return (
    <>
      <Header />
      <InputForm
        initialValues={initialValues}
        handleValueChange={setNewValues}
      />
      <ResultsTable tableData={outputValues} />
    </>
  );
}

export default App;
