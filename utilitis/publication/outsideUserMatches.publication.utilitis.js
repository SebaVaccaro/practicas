export const outsideUserMatches = (publication, userId) => {
    const matches = publication.matches
    const duplicate = matches.filter(item => item.toString() === userId)
    if (duplicate === userId) throw new Error("el usuario ya esta en requests")
    return
}