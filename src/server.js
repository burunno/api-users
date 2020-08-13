import express from 'express';
import cors from 'cors';
import mongoose  from 'mongoose';

import routes from './routes';

mongoose.connect(
  'mongodb+srv://bruno:dbusers@cluster0-ldvox.mongodb.net/users?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
  ).then(() => console.log('Database connected'));

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(process.env.PORT || 3000);