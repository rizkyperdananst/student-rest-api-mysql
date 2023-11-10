const express = require('express');
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');

const studentRoute = require('./routes/studentRoute');
const facultyRoute = require('./routes/facultyRoute');

const app = express();

app.use(morgan('dev')); // untuk melihat log aktifitas server api yang sedang di akses
// body-parser untuk menerima request body baik dia POST ataupun yg lainnya
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));

app.use(studentRoute);
app.use(facultyRoute);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});