const router = require('express').Router();
const queueRoutes = require('./queue');

// Queue routes
router.use('/queue', queueRoutes);

module.exports = router;
