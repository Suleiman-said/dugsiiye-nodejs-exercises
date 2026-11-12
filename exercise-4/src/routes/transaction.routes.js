const express = require('express');
const {
  createTransaction,
  getTransactions,
  getMonthlySummary,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transaction.controller');
const { protect } = require('../middleware/auth.middleware');
const validate = require('../middleware/validate.middleware');
const { createTransactionSchema, updateTransactionSchema } = require('../validations/transaction.validation');

const router = express.Router();

router.use(protect);

/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: Expense and income management
 */

router.route('/')
  .post(validate(createTransactionSchema), createTransaction)
  .get(getTransactions);

router.get('/monthly-summary', getMonthlySummary);

router.route('/:id')
  .put(validate(updateTransactionSchema), updateTransaction)
  .delete(deleteTransaction);

module.exports = router;