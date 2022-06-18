const { response } = require('express')


const getHospitales = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'get Hospitales'
    })
}

const setHospital = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'set Hospitales'
    })
}

const updateHospital = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'update Hospitales'
    })
}

const deleteHospital = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'delete Hospitales'
    })
}

module.exports={
    getHospitales,
    setHospital,
    updateHospital,
    deleteHospital
}