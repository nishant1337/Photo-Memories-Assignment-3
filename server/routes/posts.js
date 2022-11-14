const express = require("express");
const router=express.Router();

const {getPosts, createPost, deletePost } = require('../controllers/posts')


router.get('/', getPosts)
router.post('/create', createPost)
router.delete('/:id', deletePost )


module.exports = router;