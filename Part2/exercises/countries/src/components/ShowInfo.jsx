const ShowInfo = ({ country }) => {
  const languages = Object.values(country.languages);
  return (
    <div>
      {/* display country's name */}
      <h1>{country.name.common}</h1>
      {/* display capital */}
      <div>capital {country.capital}</div>
      {/* display area code */}
      <div>area {country.area}</div>
      <br />
      {/* display languages */}
      <div>
        {' '}
        <strong>languages</strong>
        <ul>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
      {/* display flag png */}
      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  );
};

export default ShowInfo;
