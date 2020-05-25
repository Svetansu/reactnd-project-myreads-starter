# MyReads Project v1.1

This project is my second submission for the MyReads book-keeping react application, a project for the Udacity React Developer Nanodegree.

## About

MyReads is a book-keeping app that allows users to add, select and categorize books which they have read, are currently reading, or want to read. It allows users to add new books to these categories by searching for them by name, and remove any books from the shelves they're in. It's developed using the React Framework. The starter code for this project provides one App.js file with the functionality of a Home Page and a Search Page, along with an API server and a client library for receiving, updating and storing book information as users interact with the application.

I have added some information below to make understanding my work easier:

    --  I chose to distribute App.js into separate components, which are:
            - Book.js: Component to render each book in any shelves or search results.
            - BookRow.js: The shelves or "rows" of books are stored as a component named BookRow. 
            - HomePage.js: The main landing page, where the 3 main shelves and a button to add more books, are present.
            - SearchPage.js: The search page which is opened when a user clicks on the add button on the home page, to find new books and add them.

    -- I've opted to use React Context in my application. This allows for the easy passing down of global properties of the book shelves to be passed down easily to the HomePage and SearchPage components. This was done by the index.js component in the "Provider" directory.

Some important features of the project include:
    
    -- State management
    -- Use of APIs
    -- Search handling
    -- Routing
    -- Context


## To get started

To get started developing right away:

* install all project dependencies with `npm install`/`yarn install`
* start the development server with `npm start`/`yarn start`
* run http://localhost:3000/ to view the application

