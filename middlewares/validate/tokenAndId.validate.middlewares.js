import { getTokenHeadersAuthUtilitis } from "../../utilitis/auth/getTokenHeader.auth.utilitis.js"
import { validatePublicationData } from "../../validator/publication/publication.validator.js"
import { validateUserData } from "../../validator/user/user.validator.js"

export const tokenAndIdValidateMiddleware = (req, res, next) => {
    try {
        const token = getTokenHeadersAuthUtilitis(req)
        const publicationId = req.params.id

        const { errorPublication, valuePublication } = validatePublicationData("id", publicationId)
        if (errorPublication) throw new Error(errorPublication)
        req.publicationId = valuePublication

        const { errorUser, valueUser } = validateUserData("token", token)
        if (errorUser) throw new Error(errorUser)
        req.token = valueUser

        next()
    } catch (err) {
        next(err)
    }
}