const Persons = ({ filteredPersons, handleDelete }) => {
  return (
    <div>
      {filteredPersons.map((person) => {
        return (
          <p key={person.name}>
            {person.name} {person.number}
            <button onClick={() => handleDelete(person.id)}>delete</button>
          </p>
        );
      })}
    </div>
  );
};

export default Persons;
