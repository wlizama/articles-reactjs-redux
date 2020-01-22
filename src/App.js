import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import ArticleList from './components/ArticleList'
import Form from './components/Form'
import Posts from './components/Posts'

const App = () => {
	return (
		<div className="container">
			<div className="row justify-content-center my-4">
				<div className="col">
					<h2>Articles</h2>
					<ArticleList />
				</div>
			</div>
			<div className="row justify-content-center my-4">
				<div className="col">
					<h2>Add a new Article</h2>
					<Form />
				</div>
			</div>
			<div className="row justify-content-center my-4">
				<div className="col">
					<h2>API Async Posts</h2>
					<Posts />
				</div>
			</div>
		</div>

	)
}

export default App
