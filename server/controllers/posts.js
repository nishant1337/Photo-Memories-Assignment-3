const { default: mongoose } = require("mongoose");
const PostMessage = require("../models/postMessage");

const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find({});
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  console.log("called")
  const { title, message, selectedFile, creator, tags } = req.body;
  console.log(req.body);
  const newPostMessage = new PostMessage({
    title,
    message,
    selectedFile,
    creator,
    tags,
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  console.log("deleted")
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndDelete(id);

  res.json({ message: "Post deleted successfully." });
};

module.exports = {
  getPosts,
  createPost,
  deletePost,
};
