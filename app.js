const express = require('express');
const { Double } = require('mongodb');
const mongoose = require('mongoose');
const { options } = require('./router/alien');
const app = express();
app.use(express.json());
const uri =
  'mongodb+srv://crudapp:fahim1127732@crud-app.209jv.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
}
connect();

const alienRouter = require('./router/alien');
app.use('/alien', alienRouter);

app.listen(8000, () => {
  console.log('Server started on port 8000');
});




