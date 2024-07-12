const express = require('express');
const router = express.Router();

// Video controller functions (assuming they are defined in a separate file)
const { getAllVideos, getVideoById, createVideo, updateVideo, deleteVideo } = require('../Controllers/VideoController.js');
// Define routes for video operations
router.get('/', getAllVideos);
router.get('/:id', getVideoById);
router.post('/', createVideo);
router.put('/:id', updateVideo);
router.delete('/:id', deleteVideo);

module.exports = router;
