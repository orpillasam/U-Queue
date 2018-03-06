const router = require('express').Router();
const queueRoutes = require('./queue');

// Book routes
router.use('/queue', queueRoutes);

module.exports = router;
