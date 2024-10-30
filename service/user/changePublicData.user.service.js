import { changePublicDataUsersUtilitis } from "../../utilitis/users/changePublicData.users.utilitis.js";

export const changePublicDataService = async ({publicData, user}) => {
    try {
        changePublicDataUsersUtilitis(publicData, user)
        await user.save()
        return
    } catch (err) {
        console.error("Error updating public data:", err.message);
        throw new Error("Could not update public data.");
    }
};
