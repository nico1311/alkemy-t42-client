import { actionActivities } from 'redux/constants/constants'

export const getActivities = (payload) => {
    return {
        type: actionActivities.GET_ACTIVITIES,
        payload
    }
}

export const setNewActivity = (payload) => {
    return {
        type: actionActivities.SET_ACTIVITY,
        payload
    }
}