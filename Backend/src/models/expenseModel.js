const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({ 
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  category: {
    type: String,
    required: true,
    enum: ['groceries', 'transportation', 'entertainment', 'miscellaneous']
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 200
  }
});

module.exports = mongoose.model('Expense', expenseSchema);