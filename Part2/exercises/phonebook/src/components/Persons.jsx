const Persons = ({ filteredNames }) => {
  return (
    <div>
      {filteredNames.map((person) => {
        return (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        );
      })}
    </div>
  );
};

export default Persons;
