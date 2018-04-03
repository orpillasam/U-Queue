const router = require('express').Router();
const queueController = require('../../controllers/queueController');

// Matches with "/api/queue"
router
  .route('/queue')
  .get(queueController.findAll)
  .post(queueController.create);

// Matches with "/api/queue/:id"
router
  .route('/queue/:id')
  .get(queueController.findById)
  //.get(queueController.findOne)
  .put(queueController.update)
  .delete(queueController.remove);

module.exports = router;
