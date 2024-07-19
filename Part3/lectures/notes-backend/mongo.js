const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

//establishing connection to database

const password = process.argv[2]

const url = `mongodb+srv://penguinness:${password}@cluster0.433ekwp.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(url)

// define schema for note and matching model

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// // create a new note object

// const note = new Note({
//   content: 'HTML is easy',
//   important: true,
// });

// // save the object to the database

// note.save().then((result) => {
//   console.log('note saved!');
//   mongoose.connection.close();
// });

Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note)
  })
  mongoose.connection.close()
})
