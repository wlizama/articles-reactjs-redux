import React from 'react'
import { connect } from 'react-redux'

// Dado que queremos que List obtenga una lista de artículos,
// se trata de conectar state.articles con el componente.
// ¿Cómo? Con mapStateToProps. Tenga en cuenta que "mapStateToProps"
// es solo una convención, la mayoría de los desarrolladores, por ejemplo, usan "select".
const mapStateToProps = state => {
    return { articles: state.articles }
}

const ConnectedList = ({ articles }) => (
    <ul>
        {articles.map((article, idx) => (
            <li key={idx}>{article.title}</li>
        ))}
    </ul>
)

const ArticleList = connect(mapStateToProps)(ConnectedList)

export default ArticleList
