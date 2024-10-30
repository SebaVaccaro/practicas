import { validateUserData } from "../../validator/user/user.validator.js"

export const dataValidatorUtilitis = (data) => {
    const value = []
    const err = []
    data.forEach(item=> {
        const {error, vaidateData} = validateUserData(item.schemaType, item.data)
        if(error)err.push(error)
        value.push(vaidateData)
    })
    err.forEach(item=>{ if(item)throw new Error(err)})
    return value
}