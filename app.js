const express = require('express');
const morgan = require('morgan');

const transactionRouter = require('./server/routes/transactionRoutes');
const authRouter = require('./server/routes/authenticationRoutes');
const bankRouter = require('./server/routes/bankRoutes');
const keywordRouter = require('./server/routes/keywordRoutes');
const appError = require('./server/utils/appError');

const globalErrorHandler = require('./server/controller/errorController');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use("/api/v1/transactions", transactionRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/banks", bankRouter);
app.use("/api/v1/keywords", keywordRouter);

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});


app.all('*', (req, res, next) => {
  next(new appError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;