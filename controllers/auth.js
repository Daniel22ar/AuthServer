const { response } = require('express');

const authGoogle = async (req, res = response) => {

    const token = req.body.token;

    res.json({
        ok: true,
        token
    });
};


module.exports = {
    authGoogle
}
