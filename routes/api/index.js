const router = require('express').Router();
// Imports all user and though routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
// Gives the plural prefix to user and thought
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
