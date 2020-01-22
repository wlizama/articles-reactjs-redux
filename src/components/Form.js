import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addArticle } from '../js/actions'

const mapDispatchToProps = dispatch => ({
    addArticle : article => dispatch(addArticle(article))
})

// mapDispatchToProps conecta las acciones de Redux con React props
// la acción se despacha en el método onSubmit
const ConnectedForm = ({ addArticle }) => {

    const [article, setArticle] = useState({
        title: ''
    })

    const onChangeArticle = evt => {
        setArticle({ [evt.target.name] : evt.target.value })
    }

    const onSubmit = evt => {
        evt.preventDefault()
        addArticle(article)
        setArticle({ title: '' })
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor='title'>Title:</label>
                <input type="text" name='title' className="form-control" value={article.title} onChange={onChangeArticle} />
            </div>
            <button type="submit" className="btn btn-primary w-50">💾 Save</button>
        </form>
    )
}

// Finalmente, el componente se exporta como Form.
// El formulario es el resultado de conectar ConnectedForm con el Store Redux.
// Nota: el primer argumento para connect debe ser null cuando se usa mapStateToProps 
// está ausente. O obtendrá 'TypeError: dispatch is not a function'.
const Form = connect(null, mapDispatchToProps)(ConnectedForm)

export default Form
