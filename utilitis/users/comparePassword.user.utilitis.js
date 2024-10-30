import { matchPassword } from "../hash/matchPassword.hash.utilitis.js"

export const comparePasswordUserUtilitis = async (password, user) => {
    const match = await matchPassword(password, user.password)
    if(!match) throw new Error("password incorrecto")
    return
}