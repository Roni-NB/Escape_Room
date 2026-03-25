const dotenv = require('dotenv/config');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Model = require('./schema');
const app = express();
app.set('view engine', 'ejs')
const path = require('path');
const ejs = require('ejs');
const User = require('./schema.js')
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

// added
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use (express.static (__dirname))
mongoose.connect(DB_URL)
  .then(() => console.log('Database connected'))
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


app.get('/insidecomputer', (request, response) => {
      const output = "blank" 
      response.render('inside_computer', {output: text})
//Create

router.post('/save', function (request, response) {
    const newEmail = new Model();
    newEmail.email = request.body.email;
    newEmail.subject = request.body.subject;
    newEmail.content = request.body.content;
    newEmail.date = request.body.date;

    newEmail.save(function (error, data) {
        if (error) {
            console.log(error);
        }
        else {
            response.send("Email created.");
        }
    });
});

//Read
router.get('/findall', function (request, response) {
    Model.find(function (error, data) {
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
    Model.findByEmailAndUpdate(request.body.email,
        { Email: request.body.email }, function (error, data) {
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
    Model.remove({ Email: 188 },
        function (error, data) {
            if (error) {
                console.log(error);
            }
            else {
                resolve.send(data);
            }
        });
});
});

//added
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


