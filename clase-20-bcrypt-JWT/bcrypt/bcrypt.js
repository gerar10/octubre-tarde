const bcrypt = require("bcrypt")

const saltRound = 10
// hash 
const hashPassword = async (password) => {
    const hash = await bcrypt.hash(password, saltRound)
    console.log("HASH", hash);
    return hash
}
hashPassword("pepito123")

// compare 
const check = async(userPassword, dbPassword) => {
    const match = await bcrypt.compare(userPassword, dbPassword)
    console.log(match);
}
check("nomecuerdo", "$2b$10$avw3ArptDkGcO5PA2TDFxOrVB4bAg0LzcbnxrgXtoyEbem1yRnmha")