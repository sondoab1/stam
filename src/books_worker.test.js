
const axios = require('axios');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const htmlPath = path.resolve(__dirname, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf-8');

const { window } = new JSDOM(html);
global.document = window.document;

class FormDataMock {
    constructor() {
        this.data = {};
    }
    append(key, value) {
        this.data[key] = value;
    }
}

global.FormData = FormDataMock;

jest.mock('axios');
const script = require('./book_worker');

describe('addBookForm event listener', () => {
    test('submits form data successfully', async () => {

        document.getElementById = jest.fn((id) => {
            if (id === 'title') return { value: 'Book Title' };
            if (id === 'author') return { value: 'Author Name' };
            if (id === 'image') return { files: [new Blob()], value: 'image.jpg' }; 
            if (id === 'price') return { value: '10.99' };
            if (id === 'addBookForm') return {
                addEventListener: jest.fn((event, callback) => {
                    if (event === 'submit') {
                        callback({ preventDefault: jest.fn() }); 
                    }
                }),
                reset: jest.fn()
            };
        });


        const mockedResponse = { data: 'Book added successfully!' };
        axios.post.mockResolvedValue(mockedResponse);

        await script();

        expect(axios.post).toHaveBeenCalledWith('/addBook', expect.any(FormDataMock), {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        expect(document.getElementById('addBookForm').reset).toHaveBeenCalled();
    });
});
