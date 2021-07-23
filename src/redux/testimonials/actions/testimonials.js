import { actionTestimonials } from 'redux/constants/constants'

export const getTestimonials = (payload) => {
    return {
        type: actionTestimonials.GET_TESTIMONIALS,
        payload
    }
}