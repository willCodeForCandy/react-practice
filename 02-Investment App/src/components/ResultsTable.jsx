import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ data }) {
  const results = calculateInvestmentResults(data);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map(result => {
          const { year, interest, valueEndOfYear, annualInvestment } = result;
          return (
            <tr key={year}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>
                {formatter.format(
                  valueEndOfYear -
                    (data.initialInvestment + annualInvestment * year)
                )}
              </td>
              <td>
                {formatter.format(
                  data.initialInvestment + annualInvestment * year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
