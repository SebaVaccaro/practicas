export const getTokenHeadersAuthUtilitis = (req) => {
    const authHeader = req.headers['authorization']
    if(!authHeader)throw new Error("no hay tal token")
    const token = authHeader.split(" ")[1]
    if(!token)throw new Error("token format invalid")
    return token
}