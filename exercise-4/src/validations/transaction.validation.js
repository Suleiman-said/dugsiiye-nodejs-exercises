const { z } = require('zod');

const createTransactionSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required'),
    amount: z.number({ invalid_type_error: 'Amount must be a number' }),
    type: z.enum(['income', 'expense'], { errorMap: () => ({ message: "Type must be 'income' or 'expense'" }) }),
    category: z.string().min(1, 'Category is required'),
    date: z.string().optional().transform((val) => (val ? new Date(val) : new Date())),
  }),
});

const updateTransactionSchema = z.object({
  params: z.object({ id: z.string().length(24, 'Invalid transaction ID') }),
  body: z.object({
    title: z.string().min(1).optional(),
    amount: z.number().optional(),
    type: z.enum(['income', 'expense']).optional(),
    category: z.string().min(1).optional(),
    date: z.string().optional().transform((val) => (val ? new Date(val) : undefined)),
  }),
});

module.exports = { createTransactionSchema, updateTransactionSchema };