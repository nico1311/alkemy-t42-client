import { actionCategories } from 'redux/constants/constants'

const initialState = {
    categories: null
};

export default function categoriesReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionCategories.GET_CATEGORIES:
            return {
                ...state,
                categories: payload
            }

        default:
            return state
    }
}