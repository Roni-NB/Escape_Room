const dotenv = require('dotenv/config');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.set('view engine', 'ejs')
const path = require('path');
const ejs = require('ejs');
const User = require('./schema.js')
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;
app.use (express.static (__dirname))
mongoose.connect(DB_URL)
  .then(() => console.log('💽 Database connected'))
  .catch(error => console.error(error))

app.get('/', (request, response) => {
  response.render('library_entrance');
})

app.get('/gamelore', (request, response) => {
      response.render('game_lore');
});

app.get('/howtoplay', (request, response) => {
      response.render('how_to_play');
});

app.get('/hauntedlibrary', (request, response) => {
      response.render('inside_the_library');
});

app.get('/insidecomputer', (request, response) => {
      response.render('inside_computer');
});

app.get('/hauntedlibrary/:clues', (request, response) => {
    const {clues} = request.params
    response.render(clues);
});

//Create

router.get('/save', function (req, res) {
    const newStudent = new StudentModel({
        StudentId: 101, 
        Name: "Sam", Roll: 1, Birthday: 2001 - 09 - 08
    });

    newStudent.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


