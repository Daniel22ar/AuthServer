const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = '714687607583-q3k59fqgv9l4i9sg6mvdm97g8gq23tqk.apps.googleusercontent.com';


const client = new OAuth2Client();

const validarIdGoogleToken = async (token) => {

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                '714687607583-uli57h1q77s7ujcvnndnie3bksk36rnm.apps.googleusercontent.com',
                '714687607583-cmtdmjpusla6o0uoj87nn0atv84tokv6.apps.googleusercontent.com'
            ],  // Specify the CLIENT_ID of the app that accesses the backend
        });
        const payload = ticket.getPayload();
    
        return {
            name: payload['name'],
            email: payload['email'],
            picture: payload['picture'],
    
        };
    } catch (error) {
        return null;
    }
}


module.exports = {
    validarIdGoogleToken
}
