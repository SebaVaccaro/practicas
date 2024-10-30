import bcrypt from "bcrypt"
export const matchPassword = async (password, passwordHashed) => {
    const passwordMatch = await bcrypt.compare(password, passwordHashed)
    return passwordMatch
}