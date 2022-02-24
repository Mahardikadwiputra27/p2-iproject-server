let bcrypt = require('bcryptjs');


function encrypt(raw) {
    let salt = bcrypt.genSaltSync(8);
    return bcrypt.hashSync(raw, salt);
}

function decrypt(raw, salted) {
    return bcrypt.compareSync(raw, salted)
}


module.exports = { encrypt, decrypt }