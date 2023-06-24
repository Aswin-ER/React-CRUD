const express = require('express');
const adminControllers = require('../controllers/adminControllers');
const router = express.Router();


router.post('/', adminControllers.adminLogin);
router.post('/getUser', adminControllers.getUser);
router.post('/editUser/:id', adminControllers.editUser);
router.get('/deleteUser/:id', adminControllers.deleteUser);

module.exports = router;
