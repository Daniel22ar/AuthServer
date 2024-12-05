/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const {validarCampos} = require('../middlewares/validar_campos');

const {crearUsuario, login, renew} = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar_jwt');

const router = Router();


router.post('/new',[
    //middlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos,

] ,crearUsuario); 

router.post('/',[

    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength({min: 6}),
    validarCampos,
], login );

router.get('/renew',validarJWT ,renew);

module.exports = router;