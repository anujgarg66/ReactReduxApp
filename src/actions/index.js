import { ADD_ARTICLE, CLEAR_LIST } from '../constants/action-types'

export function addArticle(payload) {
    return {
        type: ADD_ARTICLE,
        payload
    }
};

export function clearList() {
    return {
        type: CLEAR_LIST
    }
}