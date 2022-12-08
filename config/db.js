const mongoose = require('mongoose');

const connectDB = async () => {
  mongoose.set('strictQuery', true);
  await mongoose.connect(process.env.MONGO_URI);

  const db = mongoose.connection;
  console.log(`mongoDB connected: ${db.host}`.cyan.underline.bold);

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};

module.exports = connectDB;
