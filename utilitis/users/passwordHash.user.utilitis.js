import { passwordHashed } from "../hash/password.hash.service.js"

export const passwordHashUserUtilitis = async (passwd) => {
    const password = await passwordHashed(passwd)
    return password
}