const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    videoPath: {
        type: String,
        required: [true, 'A video must have a path']
    }
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
