This project was bootstrapped with React, React Hooks, React-router-dom, Pure CSS, GraphQL, @apollo/client, Cloudinary API for storing images, NodeJS, concurrently, apollo-server-express, express-graphql and MongooseJs

## Installing Dependencies

In the project root directory

### `yarn install`

In the project client directory

### `yarn install`

## Available Scripts To Run The Projects

In the project root directory, if you want to run both projects server and client at the same time, you can run:

### `npm run dev`

In the project root directory, if you want to run just the server, you can run:

### `npm run server`

In the project root directory, if you want to run just the client, you can run:

### `npm run client`


## The Frontend

* You will find a Menu Page that list Menu Items.<br />

* You will find Edit and Delete buttons to Delete a Menu Item or Update Menu Item.<br />

* You will find an Add menu item button which navigates you to the Add Menu Item Page to add Menu Item.<br />

* You will find a form contains these fields `(Type, Name, Price, Photo)` and Save item button.<br />

## The Backend

### GraphQL Endpoint

`http://localhost:4000/graphql`

### GraphQL Queries

`GET all Menu Items`
```
query GetMenuItems {
    items {
        _id
        type
        name
        price
        photo
    }
}
```


`GET Single Menu Item`
```
query GetMenuItem ($_id: String!){
    item(_id: $_id) {
        _id
        type
        name
        price
        photo
    }
}
```

### GraphQL Mutations

`DELETE Menu Item`
```
mutation RemoveMenuItem($_id: String!) {
    removeItem(_id: $_id) {
        _id
    }
}
```


`POST Menu Item`
```
mutation AddMenuItem($type: String!, $name: String!, $price: Int!, $photo: String!) {
    addItem(type: $type, name: $name, price: $price, photo: $photo) {
        type
        name
        price
        photo
    }
}
```


`UPDATE Menu Item`
```
mutation EditMenuItem($_id: String!, $type: String!, $name: String!, $price: Int!, $photo: String!) {
    updateItem(_id: $_id, type: $type, name: $name, price: $price, photo: $photo) {
        _id
        type
        name
        price
        photo
    }
}
```
