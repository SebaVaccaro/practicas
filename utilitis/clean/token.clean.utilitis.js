export const tokenClean = (token) => {
    const parts = token.split(' ')
    return parts[1]
}