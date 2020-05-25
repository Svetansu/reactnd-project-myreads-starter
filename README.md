# MyReads Project v1.1

This project is my second submission for the MyReads book-keeping react application.

## About



I have added some information below to make understanding my work easier:

    -- The starter code for this project gave us one App.js file with the functionality of a Home Page and a Search Page.
       I chose to distribute App.js into separate components, which are:
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

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`
* run http://localhost:3000/ to open the app


