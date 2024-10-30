export const deleteMatchesUtilitis = (object, id) =>{
    const matches = object.matches.filter(items=> items.toString() !== id)
    object.matches = matches
    return
}