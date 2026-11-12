const User = require('../models/user.model');
const Transaction = require('../models/transaction.model');

const getAdminOverview = async (req, res, next) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalTransactions = await Transaction.countDocuments();

    const topCategories = await Transaction.aggregate([
      { $match: { type: 'expense' } },
      { $group: { _id: '$category', totalSpent: { $sum: '$amount' }, count: { $sum: 1 } } },
      { $sort: { totalSpent: -1 } },
      { $limit: 5 },
    ]);

    res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        totalTransactions,
      },
      topCategories,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAdminOverview };