
// const initialState =[]

const initialState ={
    names:[]
}
export const rootReducer = (state = initialState, action) => {
    // switch(action.type){
    //     case 'ADD_TODO' : return [...state, action.payload]

    //     case 'DELETE_TODO' : 
    //     state.splice(action.payload, 1)
    //     return [...state]    
          
    //     default : return state
    // }

    const {names} = state
    switch(action.type){
        case 'ADD_TODO' : 
        names.push(action.payload)
        return {...state}

        case 'DELETE_TODO' : 
        names.splice(action.payload, 1)
        return {...state}    
          
        default : return state
    }
    
}