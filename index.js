import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Routes from './routes/route.js';

const app = express();


app.use(cors());

mongoose.connect('mongodb://0.0.0.0/todo_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);

const PORT = 8000;
app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));