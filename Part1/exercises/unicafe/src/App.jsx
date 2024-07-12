import { useState } from 'react';

const Heading = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, number }) => {
  return (
    <>
      <td>{text}</td>
      <td>{number}</td>
    </>
  );
};

const Statistics = ({ good, neutral, bad, total }) => {
  if (total === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <StatisticLine text='good' number={good} />
            </tr>
            <tr>
              <StatisticLine text='neutral' number={neutral} />
            </tr>
            <tr>
              <StatisticLine text='bad' number={bad} />
            </tr>
            <tr>
              <StatisticLine text='all' number={total} />
            </tr>
            <tr>
              <StatisticLine
                text='average'
                number={(good * 1 + neutral * 0 + bad * -1) / total}
              />
            </tr>
            <tr>
              <StatisticLine
                text='positive'
                number={(good / total) * 100 + ' %'}
              />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  return (
    <div>
      <Heading text='give feedback' />
      <Button
        handleClick={() => {
          setGood(good + 1);
        }}
        text='good'
      />
      <Button
        handleClick={() => {
          setNeutral(neutral + 1);
        }}
        text='neutral'
      />
      <Button
        handleClick={() => {
          setBad(bad + 1);
        }}
        text='bad'
      />
      <Heading text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

export default App;
