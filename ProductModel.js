// ProductModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

//UserModel.js


const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  workercode: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;


