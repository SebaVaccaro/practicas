import { createUserService } from "../../service/user/create.user.service.js";
import { passwordHashed } from "../../utilitis/hash/password.hash.service.js";
import { validateUserData } from "../../validator/user/user.validator.js";

export const registerUserController = async (req, res) => {
    try {
        const { error, value} = validateUserData( "register", req.body);       
        if (error) {
            return res.status(400).json({ message: "Datos de entrada no válidos", error });
        }
        
        value.password = await passwordHashed(value.password);
        delete value.repeat_password
        
        const user = await createUserService(value);
        res.status(201).json({ message: "Usuario creado exitosamente", user: user });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error al crear el usuario", error: err.message });
    }
};
