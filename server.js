const express = require('express');
const connectDB = require('./config/db');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolver');

connectDB();

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.applyMiddleware({app});

app.listen(4000, () => console.log(`Express GraphQL Server Now Running on localhost:4000/graphql`))