const router = require('express').Router();
const queueRoutes = require('./queue');
const accountRoutes = require('./account');
const historyRoutes = require('./history');

// Book routes
router.use('/queue', queueRoutes);

module.exports = router;
