const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
});

const Budget = mongoose.model('Budget', budgetSchema);