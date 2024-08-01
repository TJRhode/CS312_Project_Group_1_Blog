//requires and app declaration
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require('mongoose');

const app = express();

const url = 'mongodb://localhost:27017/BlogDB';
//const url = 'mongodb+srv://thomasjrhode:Z3ldaSpycr4b@todocluster.jgwykli.mongodb.net/?retryWrites=true&w=majority&appName=TodoCluster/todoDB'


//Bodyparser and set to static
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));

mongoose.connect(url);

//constants/variables
let port = process.env.PORT;

if (port == null || port == "") {
    port = 3000;
}

//Schema
const postSchema = new mongoose.Schema ({
  id: Number,
  author: String,
  postDate: Date,
  embed: String,
  contents: String
});

const Post = mongoose.model("Post", postSchema);
//DB objects
const samplePost = new Post ({
  id: 1,
  author: "JeremyGuy",
  postDate: "2024-09-23",
  embed: "none",
  contents: "Hey so this is a sample post"

});
//samplePost.save();

async function myPosts() {
  const posts = await Post.find({});
  posts.forEach(function(post){
      console.log(post.author);
      console.log(post.contents);
  });
}
myPosts();

//- -   -   -   -   -   -


//GET METHOD
app.get("/", function(req, res){
    res.send("HALLO")
});

//LISTEN METHOD
app.listen(port, function() {
  console.log("Server started on port " + port);
});
