import { createUserToken } from "../../token/createUser.token.js"

export const createTokenUserUtilitis = (data) => {
    const token = createUserToken(data)
    return token
}