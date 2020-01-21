import React from 'react'
import ArticleList from './components/ArticleList'
import Form from './components/Form'
import Posts from './components/Posts'

const App = () => {
	return (
		<React.Fragment>
			<div>
				<h2>Articles</h2>
				<ArticleList />
			</div>
			<div>
				<h2>Add a new Article</h2>
				<Form />
			</div>
			<div>
				<h2>API Async Posts</h2>
				<Posts />
			</div>
		</React.Fragment>

	)
}

export default App
