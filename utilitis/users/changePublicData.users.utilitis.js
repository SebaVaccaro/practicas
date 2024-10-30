
export const changePublicDataUsersUtilitis = (publicData, user) => {
    try{
        user.publicData = publicData
    }catch(err){
        throw new Error("error en formato, al actualizar el usuario")
    }
}