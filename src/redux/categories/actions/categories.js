import { actionCategories } from 'redux/constants/constants'

export const getCategories = (payload) => {
    return {
        type: actionCategories.GET_CATEGORIES,
        payload
    }
}