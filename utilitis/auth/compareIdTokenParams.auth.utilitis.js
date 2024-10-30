export const compareTokenParamsAuthUtilitis = (params, token) =>{
    if(params.id !== token.id)throw new Error("invalid compare tokenId and paramsId")
    return
}