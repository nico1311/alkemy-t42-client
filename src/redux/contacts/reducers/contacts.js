import { actionContacts } from 'redux/constants/constants'

const initialState = {
    contacts: null
};

export default function contactsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionContacts.GET_CONTACTS:
            return {
                ...state,
                contacts: payload
            }

        default:
            return state
    }
}