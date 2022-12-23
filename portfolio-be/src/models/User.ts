import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const user = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model('User', user);