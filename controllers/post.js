const Post = require('../models/post')
exports.getPosts = (req, res) => {
    res.json({
        posts: [
            {title: 'First post'}, 
            {title: 'Second post'}
        ] 
    });
};

exports.createpost = (req, res) => {
    const post = new Post
}