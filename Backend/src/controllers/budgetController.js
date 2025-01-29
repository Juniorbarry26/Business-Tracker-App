const Budget = require('../models/budgetModel');

// get all budgets
const getAllBudgets = async (req, res) => {
  res.status(200).send('Getting all budgets')
};

// get budget by id

const getBudgetById = async (req, res) => {
  res.status(200).send('Getting budget by an id')
};

// create a new budget

const createBudget = async (req, res) => {
  res.status(201).send('Creating new budget')
};

// update a budget

const updateBudget = async (req, res) => {
  res.status(201).send('Updating budget')
};

// delete a budget

const deleteBudget = async (req, res) => {
  res.status(200).send('Deleting a budget by an id')
};

module.exports = {
  getAllBudgets,
  getBudgetById,
  createBudget,
  updateBudget,
  deleteBudget,
};