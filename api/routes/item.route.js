const express = require('express');
const itemController = require('./../controllers/item.controller');
const router = express.Router();

router.get('/', itemController.index);
router.post('/', itemController.create);
router.get('/:id', itemController.get);
router.delete('/:id', itemController.delete);
router.put('/:id', itemController.update);

module.exports = router;