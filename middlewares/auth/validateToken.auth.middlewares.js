import { verifyToken } from "../../token/verifyUser.token.js"
import { getTokenHeadersAuthUtilitis } from "../../utilitis/auth/getTokenHeader.auth.utilitis.js"

export const validateTokenAuthMiddlewares = (req, res, next) => {
    try {
        const token = req.token
        const tokenData = verifyToken(token)
        req.token = tokenData
        next()
    } catch (err) {
        next(err)
    }
}