const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Port = 3000;
const connectioString = process.env.MONGOURL;

dotenv.config({ path: './config.env' });

mongoose.connect(connectioString, {

})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(Port, () => {
    console.log(`app is running on port ${Port}`);
})