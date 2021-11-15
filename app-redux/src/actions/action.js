import { GET_USERS } from '../constants';

export const actionGetUsers = (data) => ({
    type: GET_USERS,
    payload: data
})