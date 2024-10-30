import { Router } from "express";
import { userController } from "../controller/user.controller.js";

const {
    changeEmailController,
    changePasswordUserController,
    changePrivateDataUserController,
    changePublicDataUserController,
    loginUserController,
    registerUserController
} = userController


export const userRoute = Router()

    userRoute
        .post("/user", registerUserController)
        .post("/login", loginUserController)
        .post("/user/:id/email", changeEmailController)
        .post("/user/:id/publicdata", changePublicDataUserController)
        .post("/user/:id/privatedata", changePrivateDataUserController)
        .post("/user/:id/password", changePasswordUserController)
