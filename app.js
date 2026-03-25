const dotenv = require('dotenv/config');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Email = require('./model/schema.js');
const app = express();
const path = require('path');
const ejs = require('ejs');
const User = require('./model/schema.js')
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use (express.static ('public'))
app.set('view engine', 'ejs')


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
      response.render('inside_computer', {output : "output"});
});

app.get('/hauntedlibrary/:clues', (request, response) => {
    const {clues} = request.params
    response.render(clues);
});



// //Create

// app.post('/insidecomputer', (request, response) => {
//       const formData = request.bodynew Email({
//             email: formData.email,
//             subject: formData.subject,
//             content: formData.content,
//             date: formData.date
//       }).save()
//       response.redirect('/')
// })

app.post('/save', async (request, response) => {
   try {
      const newEmail = new Email({
      account: request.body.account,
      subject: request.body.subject,
      content: request.body.content,
      date: request.body.date

    })
    
    await newEmail.save()
      
   } catch (error) {
      console.log(error);

   } 
   
});

//Read
app.get('/findall', function (request, response) {
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
app.post('/update', function (request, response) {
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
app.get('/delete', function (request, response) {
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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


