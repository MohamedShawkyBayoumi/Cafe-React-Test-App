const Items = require('./models/items');

const resolvers = {
    Query: {
        items: () => Items.find(),
        item: async (_, {_id}) => {
            let res = await Items.findOne({ _id })
            return res;
        }
    },
    Mutation: {
        addItem: async(_, { type, name, price, photo }) => {
            const item = new Items({ type, name, price, photo });
            await item.save();
            return item;
        },
        removeItem: async(_, { _id }) => {
            let res = await Items.findByIdAndRemove({ _id })
            return res;
        },
        updateItem: async(_, { _id, type, name, price, photo }) => {
            try {
                console.log('_id', _id)
                let res = await Items.updateOne({ _id }, { $set: { type, name, price, photo } })
                console.log('res updatingggggg', res)
            } catch (error) {
                console.log(error)
            }
        }
       
    }
}

module.exports = { resolvers };