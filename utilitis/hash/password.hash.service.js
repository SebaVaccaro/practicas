import bcrypt from "bcrypt";

export const passwordHashed = async (password) => {
    const hashNum = 10
    try {
        const hashedPassword = await bcrypt.hash(password, hashNum);
        return hashedPassword;
    } catch (error) {
        console.error('Error hashing password:', error);
        throw error;
    }
};
