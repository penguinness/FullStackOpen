import ShowInfo from './ShowInfo';

const Display = ({ countries }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length <= 10 && countries.length > 1) {
    return (
      <div>
        {countries.map((country) => (
          <div key={country.name.common}>{country.name.common}</div>
        ))}
      </div>
    );
  } else if (countries.length === 1) {
    return <ShowInfo country={countries[0]} />;
  }
};

export default Display;
