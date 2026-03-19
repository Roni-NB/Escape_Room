import 'dotenv/config'
const express = require('express');
const app = express();
app.set('view engine', 'ejs')
const path = require('path');
const ejs = require('ejs');
app.use (express.static (__dirname))
mongoose.connect(process.env.MONGODB_URI)

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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


