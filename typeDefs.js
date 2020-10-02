const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        items: [Item!]!
    }

    type Mutation {
        addItem(type: String!, name: String!, price: Int!, photo: String!): Item
    }

    type Item {
        type: String
        name: String
        price: Int
        photo: String
    }
`;

module.exports = {typeDefs};