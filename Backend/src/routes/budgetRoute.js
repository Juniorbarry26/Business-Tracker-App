const express = require('express');
const router = express.Router();

const { 
    getAllBudgets,
    getBudgetById,
    createBudget,
    updateBudget,
    deleteBudget
} = require('../controllers/budgetController');

router.route('/').get(getAllBudgets).post(createBudget)
router.route('/:id').get(getBudgetById).patch(updateBudget).delete(deleteBudget)

module.exports = router;