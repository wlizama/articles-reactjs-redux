import { ADD_ARTICLE, DATA_LOADED } from '../types'

export const addArticle = payload => ({ type: ADD_ARTICLE, payload })


// acción asyncrona
export const getData = () => dispatch => fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => dispatch({
        type: DATA_LOADED, payload: json
    }))