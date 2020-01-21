import { ADD_ARTICLE, DATA_LOADED } from '../types'

const initialState = {
    articles: [],
    remoteArticles: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                articles: [...state.articles, action.payload],
                remoteArticles: [...state.remoteArticles]
            } // copia del estado anterior con nuevo valor
        case DATA_LOADED:
            return {
                articles: [...state.articles],
                remoteArticles: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer