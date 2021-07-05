import { actionType } from 'redux/constants/constants';

const initialState = {
    welcomeMessage : { message : 'Bienvenidos' },
    homeNews : [
        {id: 1, title: 'I am little card ', content:'ajkdhasdsjjdsjsdjdsuedh'},
        {id: 2, title: 'I am little card ', content:'ajkdhasdsjjdsjsdjdsuedh'},
        {id: 3, title: 'I am little card ', content:'ajkdhasdsjjdsjsdjdsuedh'},
        {id: 4, title: 'I am little card ', content:'ajkdhasdsjjdsjsdjdsuedh'},
        {id: 5, title: 'I am little card ', content:'ajkdhasdsjjdsjsdjdsuedh'}
]
};

export default function homeReducer (state=initialState, {type, payload}) {
    switch(type){
        case actionType.GET_WELCOME_TEXT :
            return {
                state,
                welcomeMessage:payload
            }
        case actionType.GET_NEWS :
            return {
                ...state,
                homeNews: payload
            }
        default: 
        return state;
    }
}