const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3012; // تغيير رقم المنفذ إذا لزم الأمر

// Middleware لتحليل JSON وبيانات النموذج
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// الاتصال بقاعدة البيانات MongoDB
mongoose.connect('mongodb+srv://user1:user123@cluster0.aeqomso.mongodb.net/DATABASE?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// تعريف مخطط ونموذج
const orderSchema = new mongoose.Schema({
  YourName: String,
  Phone: String,
  BookName: String,
  Author: String,
  ReleaseYear: String
});

const Order = mongoose.model('orders', orderSchema);

// توجيه لمعالجة تقديم النموذج
app.post('/orderbook', (req, res) => {
  const { YourName, Phone, BookName, Author, ReleaseYear } = req.body;

  const newOrder = new Order({ YourName, Phone, BookName, Author, ReleaseYear });

  newOrder.save()
    .then(() => {
      res.status(200).send('Order successfully.');
    })
    .catch((err) => {
      console.error('Error Ordering:', err);
      res.status(500).send('Error Ordering.');
    });
});

// تشغيل الخادم
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
