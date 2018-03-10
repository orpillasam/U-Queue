const router = require('express').Router();
const accountController = require('../../controllers/accountController');

// Matches with "/api/books"
router
  .route('/account')
  .get(accountController.findAll)
  .post(accountController.create);

// Matches with "/api/books/:id"
router
  .route('/account/:id')
  .get(accountController.findById)
  .put(accountController.update)
  .delete(accountController.remove);

module.exports = router;
