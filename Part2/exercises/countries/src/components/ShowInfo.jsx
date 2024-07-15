const ShowInfo = ({ country }) => {
  console.log(country.languages);
  const languages = Object.values(country.languages);
  return (
    <div>
      {/* display country's name */}
      <h1>{country.name.common}</h1>
      {/* display capital */}
      <p>capital {country.capital}</p>
      {/* display area code */}
      <p>area {country.area}</p>
      {/* display languages */}
      <ul>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      {/* display flag png */}
      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  );
};

export default ShowInfo;
