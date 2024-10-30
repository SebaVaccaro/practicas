import { loginUserService } from "../../service/user/login.user.service.js"
export const loginUserController = async (req, res) => {
    try{
        const token = await loginUserService(req)
        res.cookie("seva", token, /* { httpOnly: true, secure: true } */).status(200).json({ message: "Welcome"});
    }catch(err){
        console.log(err)
        res.status(500).send({ message: "Error al iniciar sesión", error: err.message })
    }
}