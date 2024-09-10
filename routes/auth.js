const { Router } = require('express');
const { authGoogle } = require('../controllers/auth');

const router = Router();

router.post('/google', authGoogle);


module.exports = router;
