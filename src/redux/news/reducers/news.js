import { actionNews } from 'redux/constants/constants'

const initialState = {
    news: null
};

export default function newsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionNews.GET_NEWS:
            return {
                ...state,
                news: payload
            }

        default:
            return state
    }
}