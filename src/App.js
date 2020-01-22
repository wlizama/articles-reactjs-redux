import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import HeaderLink from './components/HeaderLink'
import ArticleList from './components/ArticleList'
import Form from './components/Form'
import Posts from './components/Posts'

const App = () => {
	return (
		<div className="container">
			<div className="row justify-content-center my-4">
				<div className="col">
					<HeaderLink ident="Articles">Articles</HeaderLink>
					<ArticleList />
				</div>
			</div>
			<div className="row justify-content-center my-4">
				<div className="col">
					<HeaderLink ident="add-new-article">Add a new Article</HeaderLink>
					<Form />
				</div>
			</div>
			<div className="row justify-content-center my-4">
				<div className="col">
					<HeaderLink ident="api-async-posts">API Async Posts</HeaderLink>
					<Posts />
				</div>
			</div>
		</div>

	)
}

export default App
