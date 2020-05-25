import React, { Component } from 'react'
export const MyContext = React.createContext();


class index extends Component {
	constructor() {
		super();
		this.state = {
			books: [],
			cr: [],
			wtr: [],
			read: [],
			addBooks: books => {
				const cr = books.filter(a => a.shelf === "currentlyReading");
				const wtr = books.filter(b => b.shelf === "wantToRead");
				const read = books.filter(c => c.shelf === "read");
				this.setState({ books, cr, wtr, read });
			},
			move: (book, nshelf, rows) => {
				if (nshelf !== "none") {
					const bArr = this.state.books.map(a => {
					const i = rows[nshelf].find(bookID => bookID === a.id);
						if (i) {
							a.shelf = nshelf;
						}
						return a;
					});
					this.state.addBooks(bArr);
				} else {
					const filtered = this.state.books.filter(b => b.id !== book.id )
					this.state.addBooks(filtered);
				}
				
			}
		}
	}


	render() {
		return (
				<MyContext.Provider value={{...this.state}}>
					{this.props.children}
				</MyContext.Provider>
			)
	}
}


export default index