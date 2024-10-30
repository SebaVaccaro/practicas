export const deleteRequestsUtilitis = (object, id) => {
    requests = object.requests.filter(item=> item.toString() !== id)
    object.requests = requests
    return
}