document.getElementById('addBookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const image = document.getElementById('image').files[0];
    const price = document.getElementById('price').value;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('image', image);
    formData.append('price', price);

    axios.post('/addBook', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(function(response) {
        console.log(response.data);
        alert('Book added successfully!');
        document.getElementById('addBookForm').reset();
    })
    .catch(function(error) {
        console.error(error);
        alert('Error adding book');
    });
});

