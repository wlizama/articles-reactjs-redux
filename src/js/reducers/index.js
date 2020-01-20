import { ADD_ARTICLE } from '../types'

const initialState = {
    articles: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE:
            return { articles: [...state.articles, action.payload] } // copia del estado anterior con nuevo valor
        default:
            return state;
    }
}

export default rootReducer