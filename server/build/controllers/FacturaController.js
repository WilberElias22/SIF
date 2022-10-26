"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.deletePost = exports.getPost = exports.createPost = exports.getPosts = void 0;
// DB
const database_1 = require("../database");
async function getPosts(req, res) {
    try {
        const conn = await (0, database_1.connect)();
        const posts = await conn.query('SELECT * FROM posts');
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e);
    }
}
exports.getPosts = getPosts;
async function createPost(req, res) {
    const newPost = req.body;
    const conn = await (0, database_1.connect)();
    await conn.query('INSERT INTO posts SET ?', [newPost]);
    res.json({
        message: 'New Post Created'
    });
}
exports.createPost = createPost;
async function getPost(req, res) {
    const id = req.params.postId;
    const conn = await (0, database_1.connect)();
    const posts = await conn.query('SELECT * FROM posts WHERE id = ?', [id]);
    res.json(posts[0]);
}
exports.getPost = getPost;
async function deletePost(req, res) {
    const id = req.params.postId;
    const conn = await (0, database_1.connect)();
    await conn.query('DELETE FROM posts WHERE id = ?', [id]);
    res.json({
        message: 'Post deleted'
    });
}
exports.deletePost = deletePost;
async function updatePost(req, res) {
    const id = req.params.postId;
    const updatePost = req.body;
    const conn = await (0, database_1.connect)();
    await conn.query('UPDATE posts set ? WHERE id = ?', [updatePost, id]);
    res.json({
        message: 'Post Updated'
    });
}
exports.updatePost = updatePost;
