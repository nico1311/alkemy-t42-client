import { actionType } from "redux/constants/constants";

export const getMessage = (welcomeMessage) => {
     return {
        type: actionType.GET_WELCOME_TEXT,
        payload: welcomeMessage,
    };
};

export const getNews = (homeNews) => {
    return {
        type: actionType.GET_NEWS,
        payload: homeNews,
    };
};