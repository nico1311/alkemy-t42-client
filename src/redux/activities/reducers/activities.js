import { actionActivities } from 'redux/constants/constants'

const initialState = {
    activities: null
};

export default function activitiesReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionActivities.GET_ACTIVITIES:
            return {
                ...state,
                activities: payload
            }

        default:
            return state
    }
}