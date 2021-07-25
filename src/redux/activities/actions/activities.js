import { actionActivities } from 'redux/constants/constants'

export const getActivities = (payload) => {
    return {
        type: actionActivities.GET_ACTIVITIES,
        payload
    }
}