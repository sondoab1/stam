const axios = require('axios');
const script = require('./book_customer');

jest.mock('axios');

describe('addBookForm event listener', () => {
    let form;
    let titleInput;
    let authorInput;
    let imageInput;
    let priceInput;
    let contactInput;

    beforeEach(() => {
        document.body.innerHTML = `
            <form id="addBookForm">
                <input type="text" id="title">
                <input type="text" id="author">
                <input type="file" id="image">
                <input type="number" id="price">
                <input type="text" id="contact">
                <button type="submit">Submit</button>
            </form>
        `;

        form = document.getElementById('addBookForm');
        titleInput = document.getElementById('title');
        authorInput = document.getElementById('author');
        imageInput = document.getElementById('image');
        priceInput = document.getElementById('price');
        contactInput = document.getElementById('contact');
    });

    test('submits form data successfully', async () => {
        const mockedResponse = { data: 'Book added successfully!' };
        axios.post.mockResolvedValue(mockedResponse);

        titleInput.value = 'Book Title';
        authorInput.value = 'Author Name';
        // Create a mock File object for image input
        const blob = new Blob(['fake image data'], { type: 'image/jpeg' });
        const file = new File([blob], 'image.jpg');
        imageInput.files = [file];
        priceInput.value = '10.99';
        contactInput.value = 'example@gmail.com';

        await script();

        expect(axios.post).toHaveBeenCalledWith('/addBook', expect.any(FormData), {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        expect(document.getElementById('addBookForm').reset).toHaveBeenCalled();
    });
});

