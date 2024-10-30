export const userOrAdminRequestsAuthMiddleware = (req, res, next) => {
    try {
        const { createdBy, requests } = req.publication
        const { id } = req.user
        const user = requests.find(item=> item.id.toString() === id)
        if ( id !== createdBy && !user ) throw new Error("es necesario ser administrador o formar parte de la lista requests")
        next()
    } catch (err) { next(err) }
}