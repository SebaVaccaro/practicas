
import { changePasswordUserUtilitis } from "../../utilitis/users/changePassword.user.utilitis.js";
import { passwordHashUserUtilitis } from "../../utilitis/users/passwordHash.user.utilitis.js";

export const changePasswordUserService = async ({password, user}) => {
    try {
        const passwordHashed = await passwordHashUserUtilitis(password)
        changePasswordUserUtilitis(passwordHashed, user)
        await user.save()
        return
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
};
