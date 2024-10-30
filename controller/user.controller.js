import { changeEmailController } from "./user/changeEmailUser.controller.js";
import { changePasswordUserController } from "./user/changePasswordUser.controller.js";
import { changePrivateDataUserController } from "./user/changePrivateDataUser.controller.js";
import { changePublicDataUserController } from "./user/changePublicDataUser.controller.js";
import { loginUserController } from "./user/loginUser.controller.js";
import { registerUserController } from "./user/registerUser.controller.js";

export const userController = {
    changeEmailController,
    changePasswordUserController,
    changePrivateDataUserController,
    changePublicDataUserController,
    loginUserController,
    registerUserController
}