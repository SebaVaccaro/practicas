import jwt from "jsonwebtoken";

export const verifyToken = (token) => {
    try {
        const verify = jwt.verify(token, "seba1234");
        return verify;
    } catch (err) {
        console.log(err)
        throw new Error("Token invalido");
    }
};
