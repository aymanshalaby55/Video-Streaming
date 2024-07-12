const Video = require('../Models/videoModel');

// Get all videos
const getAllVideos = async (req, res) => {
    try {
        const videos = await Video.find();
        res.status(200).json({
            status: 'success',
            results: videos.length,
            data: {
                videos
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Get video by ID
const getVideoById = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        if (!video) {
            return res.status(404).json({
                status: 'fail',
                message: 'Video not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                video
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Create a new video
const createVideo = async (req, res) => {
    try {
        const newVideo = await Video.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                video: newVideo
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Delete video by ID
const deleteVideo = async (req, res) => {
    try {
        const video = await Video.findByIdAndDelete(req.params.id);
        if (!video) {
            return res.status(404).json({
                status: 'fail',
                message: 'Video not found'
            });
        }
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

module.exports = {
    getAllVideos,
    getVideoById,
    createVideo,
    deleteVideo
};
