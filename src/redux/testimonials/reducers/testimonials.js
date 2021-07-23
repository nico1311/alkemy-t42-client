import { actionTestimonials } from 'redux/constants/constants'

const initialState = {
    testimonials: null
};

export default function testimonialsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionTestimonials.GET_TESTIMONIALS:
            return {
                ...state,
                testimonials: payload
            }

        default:
            return state
    }
}