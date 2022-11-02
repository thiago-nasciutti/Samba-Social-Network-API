const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3001;

app.use(express.json());

mongoose.connect(
    'mongodb://127.0.0.1:27017/samba-social-db',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
