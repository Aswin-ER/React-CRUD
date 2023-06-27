const express = require('express');
const adminControllers = require('../controllers/adminControllers');
const adminAuth = require('../Middleware/adminAuth');
const router = express.Router();


router.post('/', adminControllers.adminLogin);
router.post('/logout', adminControllers.logout);
router.post('/getUser', adminControllers.getUser);

router.post('/editUser/:id',adminAuth, adminControllers.editUser);
router.get('/deleteUser/:id',adminAuth, adminControllers.deleteUser);
router.post('/search', adminAuth, adminControllers.searchUser);

module.exports = router;
