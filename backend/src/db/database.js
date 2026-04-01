const mongoose = require('mongoose');

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('DB connected');
  } catch (err) {
    console.error('DB connection failed:', err.message);
    process.exit(1);
  }
}

module.exports = connectToDB;
