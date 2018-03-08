const router = require('express').Router();
const queueRoutes = require('./queue');
const accountRoutes = require('./account');
const historyRoutes = require('./history');

// Queue routes
router.use('/queue', queueRoutes);

module.exports = router;
