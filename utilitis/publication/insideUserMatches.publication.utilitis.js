export const insideUserMatches = (publication, userId) =>{
    const check = publication.requests.find(user=> user === userId)
    if(!check){
        throw new Error("el usuario no se encuentra dentro de la lista")
    }
    return true
}