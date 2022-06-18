/*
RUTA /api/usuarios
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { getUsuarios, setUsuario,updateUsuario } = require('../controllers/usuarios');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarWJT } = require('../middlewares/validar-jwt');


const router = Router();

router.get('/', validarWJT , getUsuarios);

router.post('/', 
[
    validarWJT ,
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    check('password', 'El password es requerido').not().isEmpty(),
    check('email', 'El email es requerido').isEmail(),
    validarCampos
], 
setUsuario);

router.put('/:id', 
[
    validarWJT,
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    check('email', 'El email es requerido').isEmail(),
    check('role', 'El role es requerido').not().isEmpty(),
    validarCampos
], 
updateUsuario);

module.exports = router;