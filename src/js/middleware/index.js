import { ADD_ARTICLE } from '../types'

const forbiddenWords = ['money', 'spam', 'password', 'key']

export const forbiddenWordsMiddleware = store => next => action => {
    if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter( word => 
            action.payload.title.includes(word)
        )

        if (foundWord.length)
            return store.dispatch({ type: 'FOUND_BAD_WORD' }) // colocar luego
    }
    return next(action)
}