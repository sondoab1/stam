books = [
    { id: 1, title: 'Book 1', author: 'Author 1', price: 10, image: 'book1.jpg' },
    { id: 2, title: 'Book 2', author: 'Author 2', price: 15, image: 'book2.jpg' },
    { id: 3, title: 'Book 3', author: 'Author 3', price: 20, image: 'book3.jpg' },
    { id: 4, title: 'Book 4', author: 'Author 4', price: 25, image: 'book4.jpg' },
    { id: 5, title: 'Book 5', author: 'Author 5', price: 30, image: 'book5.jpg' },
    { id: 6, title: 'Book 6', author: 'Author 6', price: 35, image: 'book6.jpg' },
    { id: 7, title: 'Book 7', author: 'Author 7', price: 40, image: 'book7.jpg' }
];
let totalPrice = 0;

function displayCart() {
    totalPrice = 0;
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';   
    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('cart-item');
        bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}" class="book-image">
            <div class="book-details">
                <span>${book.title} by ${book.author} - $${book.price.toFixed(2)}</span>
                <button onclick="addToCart(${book.id})">+</button>
                <button onclick="removeFromCart(${book.id})">-</button>
                <button onclick="removeBook(${book.id})">Remove</button>
                <span id="quantity-${book.id}">0</span>
            </div>
        `;
        cartItems.appendChild(bookElement);
        totalPrice += book.price;
    });

    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerText = `Total: $${totalPrice.toFixed(2)}`;
}

function addToCart(bookId) {
    const quantityElement = document.getElementById(`quantity-${bookId}`);
    let quantity = parseInt(quantityElement.innerText);
    quantity++;
    quantityElement.innerText = quantity.toString();
    updateTotalPrice(books.find(book => book.id === bookId).price);
}

function removeFromCart(bookId) {
    const quantityElement = document.getElementById(`quantity-${bookId}`);
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 0) {
        quantity--;
        quantityElement.innerText = quantity.toString();
        updateTotalPrice(-books.find(book => book.id === bookId).price);
    }
}

function removeBook(bookId) {
    console.log("Removing book with ID:", bookId); // Debugging statement
    const quantityElement = document.getElementById(`quantity-${bookId}`);
    const quantity = parseInt(quantityElement.innerText);
    const bookToRemove = books.find(book => book.id === bookId);
    const bookToRemoveIndex = books.findIndex(book => book.id === bookId);
    books.splice(bookToRemoveIndex, 1); // Remove the book from the array
    quantityElement.innerText = '0';
    displayCart(); // Re-render the cart after removal
}

function updateTotalPrice(priceChange) {
    totalPrice += priceChange;
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerText = `Total: $${totalPrice.toFixed(2)}`;
}

function checkout() {
    alert('Checkout complete! Thank you for shopping with us.');
}

displayCart();

module.exports = { displayCart,
    addToCart,
    removeFromCart,
    removeBook,
    updateTotalPrice,
    checkout };
