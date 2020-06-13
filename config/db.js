const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/electronLogger', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log('Mongodb connected')
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;