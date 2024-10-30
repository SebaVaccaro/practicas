
import { changePrivateDataUserUtilitis } from "../../utilitis/users/changePrivateData.user.utilitis.js";

export const changePrivateDataService = async ({privateData, user}) => {
    try{
        changePrivateDataUserUtilitis(privateData, user)
        await user.save()
        return
    } catch (err) {
        console.error("Error updating private data:", err.message);
        throw new Error("Could not update private data.");
    }
};
