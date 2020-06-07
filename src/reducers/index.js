import { ADD_ARTICLE, CLEAR_LIST } from '../constants/action-types';

const initialState = {
    articles : [],
    error : ''
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE: {
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload),
                error: ""
            });
        }
        case CLEAR_LIST: {
            return initialState;
        }
        case 'FOUND_BAD_WORD': {
            return Object.assign({}, state, {
                error : "NOT ACCEPTED WORD"
            });
        }
        default:
            return state;
    }
}

export default rootReducer;