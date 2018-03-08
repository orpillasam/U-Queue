const router = require('express').Router();
const queueRoutes = require('./queue');
const accountRoutes = require('./account');
const historyRoutes = require('./history');

// Queue routes
router.use('/', queueRoutes);

module.exports = router;
