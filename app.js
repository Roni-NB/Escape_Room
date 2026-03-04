const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.use (express.static (__dirname))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/library_entrance.html'));
});


app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/game_lore.html'));
});

app.get('/howtoplay', (req, res) => {
    res.sendFile(path.join(__dirname, '/how_to_play.html'));
});

app.get('/hauntedlibrary', (req, res) => {
    res.sendFile(path.join(__dirname, '/inside_the_library.html'));
});

app.get('/hauntedlibrary/:clues', (req, res) => {
    const {clues} = req.params
    res.sendFile(path.join(__dirname, `/${clues}`));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


