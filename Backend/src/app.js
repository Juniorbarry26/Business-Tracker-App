const express = require('express');
const app = express();
const expenseRouter = require('./routes/expenseRoute');
const budgetRouter = require('./routes/budgetRoute');

// Middleware to parse JSON request bodies

// routes
app.use('/api/v1/expense', expenseRouter);
app.use('/api/v1/budget', budgetRouter);

// ports and mongodb URI
const PORT = 4000;

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});