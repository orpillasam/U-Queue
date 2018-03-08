const router = require('express').Router();
const queueController = require('../../controllers/queueController');

// Matches with "/api/queue"
router
  .route('/')
  .get(queueController.findAll)
  .post(queueController.create);

// Matches with "/api/queue/:id"
router
  .route('/:id')
  .get(queueController.findById)
  .put(queueController.update)
  .delete(queueController.remove);

module.exports = router;