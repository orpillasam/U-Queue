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
<<<<<<< HEAD
  // .get(queueController.findOne)
=======
  //.get(queueController.findOne)
>>>>>>> 880c4b0cae5d7eaa15e31e75add7c762eed58b2a
  .put(queueController.update)
  .delete(queueController.remove);

module.exports = router;
