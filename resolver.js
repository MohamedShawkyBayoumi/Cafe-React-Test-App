const Items = require('./models/items');

const resolvers = {
    Query: {
        items: () => Items.find(),
    },
    Mutation: {
        addItem: async(_, { type, name, price, photo }) => {
            const item = new Items({ type, name, price, photo });
            await item.save();
            return item;
        }
       
    }
}

module.exports = { resolvers };