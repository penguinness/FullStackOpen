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
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

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
          )
          .catch((error) => {
            if (error.response.data.error.includes('validation failed')) {
              setMessage(error.response.data.error);
              setMessageType('error');
            } else {
              setMessage(
                `Information of ${needChangePerson.name} has already been removed from server`
              );
              setMessageType(`error`);
              setPersons(
                persons.filter((person) => person.id !== needChangePerson.id)
              );
            }
            setMessage(error.response.data.error);
            setMessageType('error');
          });
      }
    } else {
      personService
        .create(personObject)
        .then((returnedPerson) => {
          setNewName('');
          setNewNumber('');
          setPersons(persons.concat(returnedPerson));
          setMessage(`Added ${returnedPerson.name}`);
          setMessageType(`add-name`);
          setTimeout(() => setMessage(null), 5000);
        })
        .catch((error) => {
          if (error.response.data.error.includes('validation failed')) {
            setMessage(error.response.data.error);
            setMessageType('error');
          }
          setMessage(error.response.data.error);
          setMessageType('error');
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

  const Notification = ({ message, className }) => {
    if (message === null) {
      return null;
    }
    return <div className={className}>{message}</div>;
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} className={messageType} />
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
      <Persons filteredPersons={filteredPersons} handleDelete={removePerson} />
    </div>
  );
};

export default App;
