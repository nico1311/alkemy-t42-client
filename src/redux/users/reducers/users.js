import { actionUsers } from 'redux/constants/constants'

const initialState = {
    users: null
};

export default function usersReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionUsers.GET_USERS:
            return {
                ...state,
                users: payload
            }

        default:
            return state
    }
}