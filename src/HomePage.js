import React, { Component } from 'react'
import BookRow from './BookRow'
import SearchBook from './SearchBook'
import { getAll } from './BooksAPI'

class HomePage extends Component {

	async componentDidMount(){
		try {
			const books = await getAll();
			console.log(books);
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
		                <BookRow header='Currrently Reading...' />
		                <BookRow header='Want To Read...' />
		                <BookRow header='Read...' />
		            </div>
	             <SearchBook />
	          	</div>
			)
	}
}

export default HomePage