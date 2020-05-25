import React from 'react'
import Book from './Book'

function BookRow(props) {
		return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{props.header}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    	{props.books && props.books.map(book => <Book key={book.id} {...book} move={props.move} />)}
                    </ol>
                  </div>
                </div>
			);
}

export default BookRow