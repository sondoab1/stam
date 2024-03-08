// test.js

// Test 1: Verify that clicking the "Add Book" button displays the add book window.
function testAddBookWindowDisplay() {
    const addBookBtn = document.getElementById('addBookBtn');
    const addBookWindow = document.getElementById('addBookWindow');

    // Simulate a click on the "Add Book" button
    addBookBtn.click();

    // Check if the add book window is displayed
    if (addBookWindow.style.display === 'block') {
        console.log('Test 1 Passed: Add book window displayed successfully.');
    } else {
        console.error('Test 1 Failed: Add book window not displayed.');
    }
}

// Test 2: Verify that submitting the form with valid data hides the add book window and shows success message.
function testSubmitValidData() {
    const addBookForm = document.getElementById('addBookForm');
    const bookNameInput = document.getElementById('bookName');
    const bookAuthorInput = document.getElementById('bookAuthor');
    const bookReleaseYearInput = document.getElementById('bookReleaseYear');

    // Fill form with valid data
    bookNameInput.value = 'Test Book';
    bookAuthorInput.value = 'Test Author';
    bookReleaseYearInput.value = '2020';

    // Simulate form submission
    addBookForm.submit();

    // Check if the add book window is hidden after submission
    if (addBookWindow.style.display === 'none') {
        console.log('Test 2 Passed: Add book window hidden after successful submission.');
    } else {
        console.error('Test 2 Failed: Add book window not hidden after successful submission.');
    }
}

// Test 3: Verify that submitting the form with invalid release year displays error message.
function testInvalidReleaseYear() {
    const addBookForm = document.getElementById('addBookForm');
    const bookReleaseYearInput = document.getElementById('bookReleaseYear');
    const errorMsg = document.getElementById('errorMsg');

    // Fill form with invalid release year
    bookReleaseYearInput.value = '1940';

    // Simulate form submission
    addBookForm.submit();

    // Check if error message is displayed
    if (errorMsg.style.display === 'block') {
        console.log('Test 3 Passed: Error message displayed for invalid release year.');
    } else {
        console.error('Test 3 Failed: Error message not displayed for invalid release year.');
    }
}

// Run tests
testAddBookWindowDisplay();
testSubmitValidData();
testInvalidReleaseYear();
