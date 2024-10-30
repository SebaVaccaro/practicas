import { userSchema } from "./schema/user.schema.validator.js";

export const validateUserData = (schemaType, data) => {
    const options = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true
    };
    const schema = userSchema[schemaType];
    if (!schema) {
        throw new Error(`Schema type '${schemaType}' is not defined in userSchema`);
    }
    const { error, value } = schema.validate(data, options);
    if (error) {
        const detailedErrors = error.details.map(detail => ({
            message: detail.message,
            path: detail.path
        }));
        console.log(error)
        throw new Error(detailedErrors);
    }
    return {value};
};
