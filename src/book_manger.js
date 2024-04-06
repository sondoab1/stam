const connectToMongoDB = require('./db');
const form = document.getElementById('bookForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = form.title.value;
    const author = form.author.value;
    const price = form.price.value;
    const summary = form.summary.value;
    try {
        const db = await connectToMongoDB();
        const collection = db.collection('books');
        const result = await collection.insertOne({
            title: title,
            author: author,
            price: price,
            summary: summary,
        });

        console.log('Book details saved successfully');
        form.reset(); // Reset form fields after submission
    } catch (error) {
        console.error('Error saving book details:', error);
    }
});