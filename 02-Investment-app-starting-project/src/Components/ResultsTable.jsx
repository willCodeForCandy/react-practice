import React from 'react';
import { calculateInvestmentResults, formatter } from '../util/investment';

const ResultsTable = ({ tableData }) => {
  const results = calculateInvestmentResults(tableData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Investment Value</th>
          <th scope="col">Interest (Year)</th>
          <th scope="col">Total Interest</th>
          <th scope="col">Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map(yearResult => {
          return (
            <tr key={yearResult.year}>
              <td>{yearResult.year}</td>
              <td>{formatter.format(yearResult.valueEndOfYear)}</td>
              <td>{formatter.format(yearResult.interest)}</td>
              <td>{formatter.format(yearResult.accumulatedInterest)}</td>
              <td>
                {formatter.format(
                  tableData.initialInvestment +
                    tableData.annualInvestment * yearResult.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;
