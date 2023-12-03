const jwt = require("jsonwebtoken")

// Sign 
// payload, secret, options
const payload = {
    name: "Juan",
    lastName: "Gutierrez"
}

const secret = "milanesa"
const token = jwt.sign(payload, secret, {expiresIn: "3h"})

console.log("TOKEN", token);


// Verify
const decodificado = (secret) => {
    try {
        const decoded = jwt.verify(token, secret)
        return decoded
    } catch (error) {
        return error.message
    }
}

console.log("DECODIFICADO", decodificado("milanesa"));