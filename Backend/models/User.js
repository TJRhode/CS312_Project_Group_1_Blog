import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  profilePicture: String,
  bio: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost' }],
});

export default UserSchema;