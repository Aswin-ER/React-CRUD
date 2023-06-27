import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, UPDATE_PROFILE_PIC } from './userTypes';

export const usersFetchSuccess=(users)=>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const usersFetchFailure=(error)=>{
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const updateUserProfilePic = (profilePic) => {
    return {
        type: UPDATE_PROFILE_PIC,
        payload: profilePic
    };
};

