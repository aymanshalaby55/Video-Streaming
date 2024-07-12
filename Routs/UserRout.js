const express = require('express');
const router = express.Router();
// User controller functions
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../Controllers/userController');

// Define routes for user operations
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;

