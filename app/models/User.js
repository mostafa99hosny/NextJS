import mongoose from 'mongoose';
const User = mongoose.models.User || mongoose.model('User', new mongoose.Schema({
  name: String,
  username: String,
  email: String
}));

export default User;
