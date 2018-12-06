import { FETCH_FRIENDS, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE } from '../actions'

const initialState = {
    friends: [],
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: action.payload
                
            }
        case FETCH_FRIENDS_FAILURE:
            return {
                ...state,
                error: action.payload
                
            }
        default:
            return state;
    }
}

