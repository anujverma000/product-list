# Get started

Live : https://flaconi.azurewebsites.net/ 

Follow the project backlog here. https://github.com/anujverma000/product-list/projects/1

---
Its a simple project to provide a responsive frontend to show a multi-column list of products for an e-commerce website as you can see on https://www.flaconi.de/parfum/.

The product entities have the following structure and will be provided in an array of products:


```js
{
  id: <String>,
  name: <String>,
  slug: <String>,
  brand: <String>,
  type: <String>,
  image: <String>,
  price: <Integer>,
  size: <String>,
  rating: <Integer>
}
```
 - `id` is the product SKU
 - `image` contains a full URL
 - `price` is in cents
 - `rating` with a scale of 0 to 100 (Displayed with 5 stars rating)

 ## Maintainers
  - @anujverma \<anujverma000@gmail.com\>

## Required functionality:
 - [x] Products data is pulled in from a JSON like server/resources/productlist.json.
 - [x] Products are display in a responsive multi-column layout for mobile, tablet & desktop.
 - [x] Product images should scale accordingly.
 - [x] The list of products is wrapped by some basic layout.
 - [x] You will provide some methods to filter the list of products by brand and type.
## Technical constraints:
 - [x] You should use React, Styled components💅, state management is a matter of your choice.
 - [x] You need to show some knowledge of HTML5, modern JavaScript(ES6) or ~~TypeScript~~.
 - [x] You will provide a working Dockerfile to run your project
## Bonus points:
  - [x] You will provide some methods to sort the list of products.
  - [x] You will add some kind of pagination / ~~load more~~ functionality.
  - [x] You will write some basic tests for your JavaScript code using Jest.
  - [x] You create simple GraphQL server to get the products
---
## Implementation Details
 - Follow the project backlog here. https://github.com/anujverma000/product-list/projects/1
 - Project is divided in two major components

  ### Client  
  Its React Client application bootstraped using CRA.

  #### Following tech stack is used to implement client side app
  - React
  - Apollo
  - React Apollo
  - React Apollo Hooks
  - Redux 
  - Styled Components

 ### Server  
  Its Express GraphQL Server.

  #### Following tech stack is used to implement server side app
  - Express
  - GraphQL
  - Express GraphQL
  - GraphQL Tags
  - GraphQL Imports
  - GraphQL Tools
  - Morgan`( for logging )`
  - PM2 `( in docker only to manage node processes )`

### Running Locally
- Get the code. 
  ```sh 
    git clone git@github.com:anujverma000/product-list.git 
  ```
- Follow this README :)

   - #### Using docker
    
  ```sh
    docker-compose up --build
  ```
     - Go to http://localhost:4000
     - Server also has a health check endpoint at http://localhost:4000/health

  - #### Dev
    - #### Server
    ```sh
      cd product-list/server
      yarn
      yarn start
    ```
      - Server will start at http://localhost:4000
      - Browse Graphiql at http://localhost:4000/graphql
      - Server also has a health check endpoint at http://localhost:4000/health 
    - #### Client
    ```sh
      cd product-list
      yarn
      yarn start
    ```
      - Go to http://localhost:3000
    
    #### Integration Tests using Cypress
      ```sh
        docker-compose up
        yarn cypress:dev
      ```
