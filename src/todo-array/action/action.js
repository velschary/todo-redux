export const add = (value) => {
    return{
        type : 'ADD_TODO',
        payload : value
    }
}
export const remove =(value) => {
    return{
        type : 'DELETE_TODO',
        payload : value
    }
}