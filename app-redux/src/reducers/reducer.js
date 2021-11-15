import { GET_USERS } from '../constants';

const defaultState = {
    users: []
};
export const getUserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };

        default:
            return state;
    }
}