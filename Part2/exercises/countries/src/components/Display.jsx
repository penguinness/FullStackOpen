import ShowInfo from './ShowInfo';

const Display = ({ countries }) => {
  const handleShowInfo = (country) => {
    return <ShowInfo country={country} />;
  };

  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length <= 10 && countries.length > 1) {
    return (
      <div>
        {countries.map((country) => {
          return (
            <div key={country.name.common}>
              <div>{country.name.common}</div>{' '}
              <button onClick={() => handleShowInfo(country)}>show</button>
            </div>
          );
        })}
      </div>
    );
  } else if (countries.length === 1) {
    return <ShowInfo country={countries[0]} />;
  }
};

export default Display;
