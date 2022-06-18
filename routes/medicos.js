/*
ruta: '/api/medicos'
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarWJT } = require('../middlewares/validar-jwt');
const { getMedicos, setMedico, updateMedico, deleteMedico } = require('../controllers/medicos')


const router = Router();

router.get('/', getMedicos);

router.post('/',
    [],
    setMedico);

router.put('/:id',
    [],
    updateMedico);

router.delete('/:id',
    [],
    deleteMedico);


module.exports = router;