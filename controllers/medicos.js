const { response } = require('express')


const getMedicos = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'get Medicos'
    })
}

const setMedico = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'set Medicos'
    })
}

const updateMedico = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'update Medicos'
    })
}

const deleteMedico = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'delete Medicos'
    })
}

module.exports={
    getMedicos,
    setMedico,
    updateMedico,
    deleteMedico
}