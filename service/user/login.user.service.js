import { comparePasswordUserUtilitis } from "../../utilitis/users/comparePassword.user.utilitis.js";
import { createTokenUserUtilitis } from "../../utilitis/users/createToken.user.utilitis.js";
import { findUsernameUserUtilitis } from "../../utilitis/users/findUsername.user.utilitis.js";

export const loginUserService = async (req) => {
    const {username, password} = req.body
    try {
        const user = await findUsernameUserUtilitis(username)
        await comparePasswordUserUtilitis(password, user)
        const token = createTokenUserUtilitis(user._id)
        return token
    } catch (err) {
        console.error(err);
        throw new Error("Error en el servicio de login");
    }
};
