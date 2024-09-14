const { response } = require('express');
const { validarIdGoogleToken } = require('../helpers/google-verify-token');

const authGoogle = async (req, res = response) => {

    const token = req.body.token;

    if(!token) {
        return res.json({
            ok: false,
            msg: 'Token is required'
        });
    }

    const googleUser = await validarIdGoogleToken(token);

    if(!googleUser) {
        return res.status(400).json({
            ok: false,
            msg: 'Invalid token'
        });
    }

    /// Guardar en base de datos 

    res.json({
        ok: true,
        googleUser
    });
};


module.exports = {
    authGoogle
}
