require('dotenv').config();
const mongoose = require('mongoose');

const keys = require('../config/keys');
const { database } = keys;

const setupDB = async () => {
  try {
    // Connect to MongoDB
    mongoose.connect(database.url, {});
    console.log("DB Connected Successfully!!!");

  } catch (error) {

    console.log(error);
    console.log("DB Connection Failed!!!");

  }
};



module.exports = setupDB;
