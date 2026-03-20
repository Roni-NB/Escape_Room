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

router.post('/insidecomputer', function (request, response) {
    const Email = new Email({
    account: 'poop@gmail.com',
    subject: 'poop',
    content: 'pooooooooooooooooooooop',
    date = 11.09.2001,
  })
  Email.save()

  response.send('Email Created.')
});

//Read
router.get('/findall', function (reqest, response) {
    EmailModel.find(function (error, data) {
        if (error) {
            console.log(error); 
        }
        else {
            response.send(data);
        }
    });
});

//Update
router.post('/update', function (request, response) {
    EmailModel.findByEmailAndUpdate(req.body.Email,
        { Email: request.body.Email }, function (error, data) {
            if (error) {
                console.log(error);
            }
            else {
                response.send(data);
                console.log("Data updated!");
            }
        });
});

//Delete
router.get('/delete', function (request, response) {
    StudentModel.remove({ Email: 188 },
        function (error, data) {
            if (error) {
                console.log(error);
            }
            else {
                res.send(data);
            }
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


