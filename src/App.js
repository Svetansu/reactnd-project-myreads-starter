import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import SearchPage from './SearchPage'
import Provider, { MyContext } from './Provider/'

//import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Provider>
            <Switch>
              <Route exact path="/" 
                render={() => (
                    <MyContext.Consumer>
                      {context => <HomePage {...context} />}
                    </MyContext.Consumer>
                  )}
              />
              <Route exact path="/search" 
                render={() => (
                    <MyContext.Consumer>
                      {context => <SearchPage {...context} />}
                    </MyContext.Consumer>
                  )}
              />
            </Switch>
        </Provider>
      </div>
    )
  }
}

export default BooksApp
