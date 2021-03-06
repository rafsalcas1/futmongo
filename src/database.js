import mongoose from "mongoose";

var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://localhost:27017/futmongo";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
};

mongoose.Promise = global.Promise;
mongoose
  .connect(uri, options)
  .then(() => {
    console.log("Conectado a MongoDB 💾");
  })
  .catch(err => {
    console.error(err);
  });