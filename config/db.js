const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect('mongodb+srv://MohamedShawky:Mohamed123456789@cluster0.sjtrw.mongodb.net/cafe?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;