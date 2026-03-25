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

app.get('/add', (request, response) => {
      response.render('add');
});


app.get('/hauntedlibrary/:clues', (request, response) => {
    const {clues} = request.params
    response.render(clues);
});



app.post('/save', async (request, response) => {
   try {
      const newEmail = new Email({
      account: request.body.account,
      subject: request.body.subject,
      content: request.body.content,
      date: request.body.date

    })
    
    await newEmail.save()
    response.redirect('/insidecomputer')
   } catch (error) {
      console.log(error);

   } 
   
});

app.get('/insidecomputer', async (request, response) => {
  const emails = await Email.find({}).exec()
  console.log(emails)
  response.render('inside_computer', { 
      emails: emails,
  })
})

app.get('/edit', async (request, response) => {
        const emails = await Email.find({}).exec()
  console.log(emails)
  response.render('edit', { 
      emails: emails,
  })
});

//Update
app.post('/insidecomputer/:slug', async (request, response) => {
  try {
    const Email = await Email.findOneAndUpdate(
      { slug: request.params.slug }, 
      request.body
    )
    
    // todo
  }catch (error) {
    console.error(error)
  }
})

//Delete
app.get('/insiidecomputer/:slug/delete', async (request, response) => {
  try {
    await Email.findOneAndDelete({ slug: request.params.slug })
    
    response.redirect('/???')
  }catch (error) {
    console.error(error)
  }

})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


