const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can not be more then 50 characters'],
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'Please add a name'],
    maxlength: [500, 'Description can not be more then 500 characters'],
  },
});
