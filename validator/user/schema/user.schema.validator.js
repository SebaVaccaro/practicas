
import { emailSchema } from "./email.schema.user.validator.js";
import { loginUserSchema } from "./login.schema.user.validator.js";
import { passwordSchema } from "./password.schema.user.validator.js";
import { privateData } from "./privateData.schema.user.validator.js";
import { publicDataSchema } from "./publicData.schema.user.validator.js";
import { registerUserSchema } from "./register.schema.user.validator.js";
import { tokenSchema } from "./token.schema.user.js";

export const userSchema = {
    email: emailSchema,
    login: loginUserSchema,
    password: passwordSchema,
    privateData: privateData,
    register: registerUserSchema,
    publicData: publicDataSchema,
    token: tokenSchema
}