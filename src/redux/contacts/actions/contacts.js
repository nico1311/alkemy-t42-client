import { actionContacts } from 'redux/constants/constants'

export const getContacts = (payload) => {
    return {
        type: actionContacts.GET_CONTACTS,
        payload
    }
}