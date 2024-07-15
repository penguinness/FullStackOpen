import countryAPIService from '../services/countries';

const Display = ({ countries }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length <= 10 && countries.length > 1) {
    return (
      <div>
        {countries.map((country) => {
          <div>{country.name.common}</div>;
        })}
      </div>
    );
  }
  //   else {
  //     const country = countries.name.common;
  //     // countryAPIService.getCountry(country)
  //     return (
  //       <div>
  //         {/* display country's name (heading 1) */}
  //         {/* display capital */}
  //         {/* display area code */}
  //         {/* display languages */}
  //         {/* display flag png */}
  //       </div>
  //     );
  //   }
};

export default Display;
