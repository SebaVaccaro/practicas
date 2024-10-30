import { validateUserData } from "../../validator/user/user.validator.js"

export const checkValidatorUtilitis = (schemaType, data) => {
    const {value} = validateUserData(schemaType, data)
    return value
}