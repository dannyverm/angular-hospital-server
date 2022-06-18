const { response } = require('express');
const bcrypt = require('bcryptjs')
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');

const getUsuarios = async (req, res) => {
    
    const usuarios = await Usuario.find({}, 'nombre email google role');
    res.json({
        ok: true,
        usuarios
    })
}

const setUsuario = async (req, res = response) => {

    const { nombre, password, email } = req.body

    try {
        const usuarioExiste = await Usuario.findOne({ email });

        if (usuarioExiste) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya existe'
            })
        }

        const usuario = new Usuario(req.body);

        //encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        //guardar usuario
        await usuario.save();

        //Generar el token - JWT
        const token = await generarJWT(usuario.id);

        res.json({
            ok: true,
            usuario,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        })
    }
}

const updateUsuario = async (req, res = response) => {
    //TODO: validar si es el usuario correcto

    const uid = req.params.id

    try {

        const DBUsuario = await Usuario.findById(uid);
        if (!DBUsuario) {
            return res.status(404).json({
                ok: false,
                msg: 'El id no es correcto'
            })
        }
        //Primera forma de eliminar datos del body y dejar solo lo que se quiere actualizar
        const { password, google, email, ...data } = req.body

        //instruccion para borrar campos que no quiero actualizar si se envian por body
        //delete data.google;


        const usuarioUpdate = await Usuario.findByIdAndUpdate(uid, data, { new: true });

        res.json({
            ok: true,
            usuario: usuarioUpdate
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Se produjo un error inesperado'
        })
    }
}

module.exports = {
    getUsuarios,
    setUsuario,
    updateUsuario,
}


