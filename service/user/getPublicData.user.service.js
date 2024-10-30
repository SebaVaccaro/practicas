import { User } from "../../model/schema/user.schema.model.js"

export const getPublicDataService = async (id) => {
    try{
        // Busca el usuario por su id
        const user = await User.findById(id)
        if (!updatedUser) {
            throw new Error("User not found");
        }
        
        //retorna los datos publicos del usuario
        return user.publicData
    
    }catch(err){
        
        //imprime el error y lanza un nuevo error
        console.error(err.message)
        throw new Error("Error en el servicio de busqueda de usuario")
    }
}