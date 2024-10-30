
import { changeEmailUtilitis } from "../../utilitis/users/changeEmail.utilitis.js";

export const changeEmailService = async ({email, user}) => {
    try {
        changeEmailUtilitis(email, user)
        await user.save()
        return
    } catch (err) {
        console.log(err);
        throw new Error("Could not update email.");
    }
};