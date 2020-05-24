import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBook extends Component {
	render() {
		return (
            <div className="open-search-div">
              <Link className="open-search" to={"/search"}>Add a book</Link>
            </div>
			)
	}
}

export default SearchBook