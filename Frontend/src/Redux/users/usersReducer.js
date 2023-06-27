import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, UPDATE_PROFILE_PIC } from "./userTypes"

const initialState = {
    users : [],
    error : '',
    profilePic: ''
}

const usersReducer=(state=initialState, action)=>{
    switch(action.type){
        case FETCH_USERS_SUCCESS:
            return{
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            
            return{
                users: [],
                error: action.payload
            }

        case UPDATE_PROFILE_PIC:
            return {
                profilePic: action.payload
            };
                
        default: return state
    }
}

export default usersReducer;