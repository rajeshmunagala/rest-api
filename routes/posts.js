const express = require("express");
const router = express.Router();
const Post = require('../models/Post');
//GETS ALL POSTS
router.get('/', async(req, res) =>{
    try{
        const posts = await Post.find();
        res.json(posts);

    }catch(err){
        res.json({message: err})
    }
});
//SUBMITS POST
router.post('/', async (req, res) => {
  const post = new Post({
      title: req.body.title,
      description: req.body.description
  });
  try {
      const savedPost = await post.save();
      res.json(savedPost);
  } catch (err) {
      res.json({message: err});
  }
  
//   post.save()
//   .then(data => {
//       res.json(data);
//   })
//   .catch(err => {
//       res.json({message: err});
//   })
});
//GET SPECIFIC POST
router.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({message: error});
    }
    
})
//DELETE A SPECIFIC POST
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    } catch (error) {
        res.json({message: error});
    }
    
})
//UPDATE A POST
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({_id: req.params.postId}, 
            { $set: {title: req.body.title}}
            );
            res.json(updatedPost);

    } catch (error) {
        res.json({message: error});
    }
})
module.exports = router;