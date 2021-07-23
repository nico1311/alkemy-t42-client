import { actionNews } from 'redux/constants/constants'

export const getNews = (payload) => {
    return {
        type: actionNews.GET_NEWS,
        payload
    }
}