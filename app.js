require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
// ^ console.log of mongoose would include Schema and model, used in song.js
// ^^ just saying for reference
const cors = require('cors'); // needed to talk with frontend
// const bcrypt for authentication
// const jwt for authentication
const songsController = require('./controllers/songs');
const plantsController = require('./controllers/plants');
const MONGOURI = process.env.MONGODB_URI; // currently for bitingRent
// ^ bitingRent is collection name with subdatabases: plants, songs
const PORT = process.env.PORT || 3007; 
// ^ does this mean I can put my PORT value in my .env to be hidden if wanted?
const { show } = require('./stuff'); // const show = require('./stuff').show;
// const show = { show: console.log }.show;

// const user = require('./models/user');

app.use(cors());
app.use(express.json());

// if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
//     app.use(express.static('client/build'));
//     app.get('*', (req, res) => {
//         // res.sendFile(path.join('project_3_marge_bitingRent', '/client/build/index.html'));
//         res.sendFile(path.join(__project_3_marge_bitingRent + '/client/build/index.html'));
//     });
// }

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', (err) => {
    show(err.message);
});

mongoose.connection.on('disconnected', () => {
    show('Hey I got disconnected');
});

mongoose.connection.once('open', () => {
    show('Connected to MONGO')
});

app.use('/songs', songsController);
app.use('/plants', plantsController);

// app.post('/register')

// app.post('/login')

// ======================================================================================
//                                  LISTENING
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

app.listen(PORT, () => {
    show('On Port: ', PORT);
});
