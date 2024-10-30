export const insideUserRequest = (publication, userId) =>{
        const check = publication.requests.find(item=> item.toString() === userId)
        if(!check){
            throw new Error("el usuario no se encuentra dentro de la lista")
        }
        return true
}