const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    confirmPassword: {
        required: true,
        type: String,
        validate: {
            // this only works on save
            validator: function (val) {
                return this.password === val;
            },
            message: "password dosn't match"
        }
    },
    videos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
