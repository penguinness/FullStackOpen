require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//express middleware
const app = express();
app.use(express.json());

//cors middleware
app.use(cors());

//morgan middleware
morgan.token('body', function (req) {
  return JSON.stringify(req.body);
});

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
);

const Person = require('./models/person');

// static middleware (place right before routes definition)
app.use(express.static('dist'));

//persons resource
let persons = [
  {
    id: '1',
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: '2',
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: '3',
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: '4',
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];

//route handlers
app.get('/', (request, response) => {
  response.send('<h1>Phonebook Backend</h1>');
});

app.get('/api/persons', (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons);
  });
});

app.get('/api/info', (request, response) => {
  Person.countDocuments({}).then((count) => {
    const info = `<p>Phonebook has info for ${count} people</p><p>${new Date().toString()}</p>`;
    response.send(info);
  });
});

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id)
    .then((person) => {
      response.json(person);
    })
    .catch((error) => next(error));
});

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

const generateId = () => {
  let id = Math.floor(Math.random() * 100000).toString();
  while (persons.find((person) => person.id === id)) {
    id = Math.floor(Math.random() * 100000).toString();
  }
  return id;
};

app.post('/api/persons', (request, response) => {
  const body = request.body;

  if (!body.name) {
    return response.status(400).json({
      error: 'name missing',
    });
  }

  if (!body.number) {
    return response.status(400).json({
      error: 'number missing',
    });
  }

  const nameExists = persons.find((person) => person.name === body.name);
  if (nameExists) {
    return response.status(400).json({
      error: 'name must be unique',
    });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
    randomID: generateId(),
  });

  person.save().then((savedPerson) => {
    response.json(savedPerson);
  });
});

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body;

  const person = {
    name: body.name,
    number: body.number,
    randomID: body.randomID,
  };

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then((updatedPerson) => {
      if (!updatedPerson) {
        return response.status(404).json({ error: '404 not found' });
      }
      response.json(updatedPerson);
    })
    .catch((error) => next(error));
});

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  }

  next(error);
};

// this has to be the last loaded middleware, also all the routes should be registered before this!
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
