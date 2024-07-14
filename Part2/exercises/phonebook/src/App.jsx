import { useState, useEffect } from 'react';
import personService from './services/phonebook';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then((initialPhonebook) => setPersons(initialPhonebook));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: (persons.length + 1).toString(),
    };

    if (persons.some((person) => person.name === newName)) {
      const result = confirm(
        `${newName} is already added to phonebook, replace the old number with a new one`
      );
      if (result) {
        const needChangePerson = persons.find(
          (person) => person.name === newName
        );
        const changedPerson = { ...needChangePerson, number: newNumber };

        personService
          .update(needChangePerson.id, changedPerson)
          .then((returnedPerson) =>
            setPersons(
              persons.map((person) =>
                person.id !== needChangePerson.id ? person : returnedPerson
              )
            )
          );
      }
    } else {
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
      });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchName(event.target.value);
  };

  const filteredNames = persons.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const removePerson = (id) => {
    const removedPerson = persons.find((person) => person.id === id);

    const name = removedPerson.name;

    let result = confirm(`Delete ${name}?`);

    if (result === true) {
      personService.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons filteredNames={filteredNames} handleDelete={removePerson} />
    </div>
  );
};

export default App;
