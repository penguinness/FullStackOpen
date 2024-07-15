import { useState, useEffect } from 'react';
import countryAPIService from './services/countries';
import Display from './components/Display';

const App = () => {
  const [value, setValue] = useState('');
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    countryAPIService.getAll().then((countries) => setCountries(countries));
  }, []);

  const findCountries = () => {
    return countries.find(country);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
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
