import { changeEmailService } from "../../service/user/changeEmail.user.service.js"

export const changeEmailController = async (req, res) => {
    try {
        await changeEmailService(req)
        res.status(200).json({ message: "Correo electrónico actualizado exitosamente"});
    } catch (err) {
        console.error(err);
        res.status(500).json({error: err.message });
    }
};