const { Router } = require('express');
const router = Router();

const savedListCtrl = require('../controllers/savedList.controller');

router.get('/', savedListCtrl.getList);
router.get('/:id', savedListCtrl.getOneList);
router.post('/', savedListCtrl.createList);
router.put('/:id', savedListCtrl.updateList);
router.delete('/:id', savedListCtrl.deleteList);

module.exports = router;