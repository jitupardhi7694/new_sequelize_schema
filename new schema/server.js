const express = require('express');
const cors = require('cors');

// const path = require('path');
// const { urlencoded } = require('body-parser');
// const { env } = require('process');
const app = express();

var corOptions = {
    origin: 'https://localhost:8081',
};

// router

const router = require('./router/patientDetailsRouter');

app.use('/api/patients', router);
// app.use('/api/patients', router);

app.use(cors(corOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// PORT
const PORT = process.env.PORT || 8081;

// testing api
app.get('/', (req, res) => {
    res.json({ message: 'hello friends api is use' });
});

app.listen(PORT, (err) => {
    if (err) throw err;
    else {
        console.log('server is running on port http://localhost:8081');
    }
});
