/* 
ruta: '/api/hospitales'
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarWJT } = require('../middlewares/validar-jwt');
const { getHospitales, setHospital, updateHospital, deleteHospital } = require('../controllers/hospitales')


const router = Router();

router.get('/', getHospitales);

router.post('/',
    [
        validarWJT,
        check('nombre','El nombre del hospital es necesario').not().isEmpty(),
        validarCampos
    ],
    setHospital);

router.put('/:id',
    [],
    updateHospital);

router.delete('/:id',
    [],
    deleteHospital);


module.exports = router;