export const adminAuthMiddleware = (req, res, next) => {
    try {
        const { createdBy } = req.publication
        const { id } = req.user
        if (id !== createdBy) throw new Error("es necesario ser administrador")
        next()
    } catch (err) { next(err) }
}