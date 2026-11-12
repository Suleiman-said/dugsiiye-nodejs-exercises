const PREDEFINED_CATEGORIES = [
  { id: 1, name: 'Food', type: 'expense' },
  { id: 2, name: 'Housing', type: 'expense' },
  { id: 3, name: 'Transport', type: 'expense' },
  { id: 4, name: 'Utilities', type: 'expense' },
  { id: 5, name: 'Entertainment', type: 'expense' },
  { id: 6, name: 'Salary', type: 'income' },
  { id: 7, name: 'Freelance', type: 'income' },
  { id: 8, name: 'Investments', type: 'income' },
];

const getCategories = async (req, res, next) => {
  try {
    res.status(200).json({ success: true, data: PREDEFINED_CATEGORIES });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCategories };