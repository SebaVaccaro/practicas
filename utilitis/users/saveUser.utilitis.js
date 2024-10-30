export const saveUserUtilitis = async (user) =>{
    try{
        await user.save()
        return
    }catch(err){
        console.log(err)
        throw new Error(err.message)
    }
}