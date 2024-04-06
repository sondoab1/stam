const {
    displayCart,
    addToCart,
    removeFromCart,
    removeBook,
    updateTotalPrice,
    checkout
} = require('./cart.js');

describe('Cart Functions', () => {
    const books = [
        { id: 1, title: 'Book 1', author: 'Author 1', price: 10, image: 'book1.jpg' },
        { id: 2, title: 'Book 2', author: 'Author 2', price: 15, image: 'book2.jpg' },
    ];

    beforeEach(() => {
        document.getElementById('cart-items').innerHTML = '';
        totalPrice = 0;
    });

    test('Display cart renders correct HTML', () => {
        const cartItems = document.createElement('div');
        cartItems.id = 'cart-items';
        document.body.appendChild(cartItems);
        const totalPriceElement = document.createElement('span');
        totalPriceElement.id = 'total-price';
        document.body.appendChild(totalPriceElement);

        displayCart();

        expect(cartItems.innerHTML).toMatchSnapshot();
        expect(totalPriceElement.innerText).toBe('Total: $0.00');
    });

    test('Add to cart increases quantity and updates total price', () => {
        const bookId = 1;
        addToCart(bookId);
        expect(document.getElementById(`quantity-${bookId}`).innerText).toBe('1');
        expect(totalPrice).toBe(books.find(book => book.id === bookId).price);
    });

    test('Remove from cart decreases quantity and updates total price', () => {
        const bookId = 1;
        addToCart(bookId); 
        removeFromCart(bookId);
        expect(document.getElementById(`quantity-${bookId}`).innerText).toBe('0');
        expect(totalPrice).toBe(0); 
    });

    test('Remove book removes book from cart and updates total price', () => {
        const bookId = 1;
        addToCart(bookId); 
        removeBook(bookId);
        expect(document.getElementById('cart-items').innerHTML).toBe('');
        expect(totalPrice).toBe(0);
    });

    test('Update total price correctly adds price change', () => {
        const initialPrice = totalPrice;
        updateTotalPrice(10);
        expect(totalPrice).toBe(initialPrice + 10);
    });

    test('Checkout alerts with correct message', () => {
        window.alert = jest.fn(); 
        checkout();
        expect(window.alert).toHaveBeenCalledWith('Checkout complete! Thank you for shopping with us.');
    });
});
