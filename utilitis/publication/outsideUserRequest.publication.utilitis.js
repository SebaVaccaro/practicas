export const outsideUserRequest = (publication, userId) => {
    const requests = publication.requests
    const duplicate = requests.find(item=> item.toString() === userId)
    if(duplicate)throw new Error("el usuario ya esta en requests")
    return
}
