const Expense = require('../models/expenseModel');

// Get all expenses
const getAllExpenses = async (req, res) => {
  res.status(200).send('Getting all expenses')
};

// Get expenses by user ID
const getExpenseById = async (req, res) => {
  res.status(200).send('Getting expense by an id')
};

// Create a new expense
const createExpense = async (req, res) => {
  res.status(201).send('Creating new expense')
};

// Update an existing expense
const updateExpense = async (req, res) => {
  res.status(201).send('Updating expense')
};

// Delete an expense by ID

const deleteExpense = async (req, res) => {
  res.status(200).send('Deleting a expense by an id')
};

module.exports = {
  getAllExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  deleteExpense
};