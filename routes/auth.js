/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');

const { check } = require('express-validator');

const router = Router();

const {crearUsuario, login, renew} = require('../controllers/auth');

router.post('/new',[
    //middlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),

] ,crearUsuario); 

router.post('/', login );

router.get('/renew', renew);

module.exports = router;