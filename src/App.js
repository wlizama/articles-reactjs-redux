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
					<div className="card">
						<div className="card-header">
							<HeaderLink ident="Articles">Articles</HeaderLink>
						</div>
						<div className="card-body">
							<ArticleList />
						</div>
					</div>
				</div>
			</div>
			<div className="row justify-content-center my-4">
				<div className="col">
					<div className="card">
						<div className="card-header">
							<HeaderLink ident="add-new-article">Add a new Article</HeaderLink>
						</div>
						<div className="card-body">
							<Form />
						</div>
					</div>
				</div>
			</div>
			<div className="row justify-content-center my-4">
				<div className="col">
					<div className="card">
						<div className="card-header">
							<HeaderLink ident="api-async-posts">API Async Posts</HeaderLink>
						</div>
						<div className="card-body">
							<Posts />
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default App
