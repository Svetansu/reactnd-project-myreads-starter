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
				console.log(nshelf);
				const bArr = this.state.books.map(a => {
					const i = rows[nshelf].find(bookID => bookID === a.id);
					if (i) {
						a.shelf = nshelf;
					}
					return a;
				});
				this.state.addBooks(bArr);
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