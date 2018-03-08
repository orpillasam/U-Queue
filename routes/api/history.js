const router = require('express').Router();
const queueController = require('../../controllers/historyController');

// Matches with "/api/history"
router
  .route('/history')
  .get(queueController.findAll)
  .post(queueController.create);

// Matches with "/api/history/:id"
router
  .route('/history/:id')
  .get(queueController.findById)
  .put(queueController.update)
  .delete(queueController.remove);

module.exports = router;
