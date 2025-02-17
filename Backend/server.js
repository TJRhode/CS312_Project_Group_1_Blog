import express from "express";
import mongoose from "mongoose";
import bodyParse from "body-parser";
import cors from "cors";
import blogPosts from "./routes/blogPosts";
import auth from "./routes/auth";

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/blogPosts', blogPosts);
app.use('/api/auth', auth);

mongoose.connect('mongoose link', {

})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})
