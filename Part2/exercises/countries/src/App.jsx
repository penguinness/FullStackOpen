import { useState, useEffect } from 'react';
import countryAPIService from './services/countries';
import Display from './components/Display';

const App = () => {
  const [value, setValue] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (value) {
      countryAPIService.getAll().then((countries) => {
        const matchedCountries = countries.filter((country) =>
          country.name.common.toLowerCase().includes(value.toLowerCase())
        );
        setCountries(matchedCountries);
        console.log(
          `First matched country for testing: ${JSON.stringify(
            matchedCountries[0]
          )}`
        );
        console.log(matchedCountries.length);
      });
    } else {
      setCountries([]);
    }
  }, [value]);

  const handleChange = (event) => {
    console.log(`handleChange called with value: ${event.target.value}`);
    setValue(event.target.value);
  };

  return (
    <div>
      <form>
        find countries <input value={value} onChange={handleChange} />
      </form>
      <Display countries={countries} />
    </div>
  );
};

export default App;
