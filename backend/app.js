const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');

const cookieParser = require('cookie-parser');

const cors = require('cors');
require('dotenv').config();

const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');
const {
  createUser,
  login,
  signout,
} = require('./controllers/users');
const { auth } = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorsHandler');
const NotFoundError = require('./errors/NotFoundError');
const { validateRegister, validateLogin } = require('./middlewares/validation');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { MAIN_URLS } = require('./utils/utils');

const app = express();

const { PORT = 3000, MONGODB_URL } = process.env;

app.use(cookieParser());

app.use(express.json());

app.use(cors({
  origin: MAIN_URLS,
  credentials: true,
}));

mongoose.connect(MONGODB_URL);

app.use(requestLogger);

app.post('/signup', validateRegister, createUser);

app.post('/signin', validateLogin, login);

app.use(auth);

app.use(userRouter);

app.use(cardRouter);

app.get('/signout', signout);

app.use((req, res, next) => {
  next(new NotFoundError('Страница по указанному маршруту не найдена'));
});

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

app.listen(PORT);
