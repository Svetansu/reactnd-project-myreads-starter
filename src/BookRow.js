import React, { Component } from 'react'
import Book from './Book'

class BookRow extends Component {
	render() {
		return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.header}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    	{this.props.books && this.props.books.map(book => <Book key={book.id} {...book} move={this.props.move} />)}
                    </ol>
                  </div>
                </div>
			)
	}
}

export default BookRow