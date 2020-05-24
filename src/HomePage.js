import React, { Component } from 'react'
import BookRow from './BookRow'
import { Link } from 'react-router-dom'
import { getAll } from './BooksAPI'

class HomePage extends Component {

	async componentDidMount(){
		try {
			const books = await getAll();
			this.props.addBooks(books);
		} catch( error ) {
			console.log(error);
		}
	}
	render() {
		return (
				<div className="list-books">
		            <div className="list-books-title">
		              <h1>MyReads</h1>
		            </div>
		            <div className="list-books-content">
		                <BookRow header='Currrently Reading...' books={this.props.cr} move={this.props.move} />
		                <BookRow header='Want To Read...' books={this.props.wtr} move={this.props.move} />
		                <BookRow header='Read...' books={this.props.read} move={this.props.move} />
		            </div>
		            <div className="open-search-div">
		              <Link className="open-search" to={"/search"}>Add a book</Link>
		            </div>
	          	</div>
			)
	}
}

export default HomePage
