const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        items: [Item!]!
        item(_id: String!): Item
    }

    type Mutation {
        addItem(type: String!, name: String!, price: Int!, photo: String!): Item
        removeItem(_id: String!): Item
        updateItem(_id: String!, type: String!, name: String!, price: Int!, photo: String!): Item
    }

    type Item {
        _id: String
        type: String
        name: String
        price: Int
        photo: String
    }
`;

module.exports = {typeDefs};