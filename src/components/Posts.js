import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getData } from '../js/actions'


// mapDispatchToProps (esta vez con el formulario abreviado del objeto)
// asignará los creadores de acciones de Redux a las propiedades de nuestros componentes.
const Posts = props => {

    useEffect(() => {
        props.getData()
    }, [])

    return (
        <ul className="list-group list-group-flush">
            {props.articles.map( (article, idx) => (
                <li key={article.id} className="list-group-item">
                    <span className="font-weight-bold">{idx+1}. </span>{article.title}
                </li>
            ))}
        </ul>
    )
}

// Finalmente, para actualizar nuestro componente Posts para mostrar nuestras 
// publicaciones "remotas". Usaremos mapStateToProps para seleccionar diez publicaciones:
const mapStateToProps = state => ({
    articles: state.remoteArticles.slice(0, 10)
})

export default connect(mapStateToProps, { getData })(Posts)
