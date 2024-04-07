const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./AddProdectRoutesM');
const singupRoutes = require('./signupworker1Routes');

const app = express();

// الاتصال بقاعدة البيانات MongoDB
mongoose.connect('mongodb+srv://user1:user123@cluster0.aeqomso.mongodb.net/DATABASE?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// استخدام middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// استخدام مسارات المنتجات
app.use('/product', productRoutes);
app.use('/User', singupRoutes);
// تعيين المنفذ
const PORT = 3060;

// بدء الخادم
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
