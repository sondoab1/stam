
    // Assertion library
    const expect = chai.expect;

    // Test cases
    describe('Login', function () {
        it('should redirect to customer home page if email and password are correct', function () {
            // Arrange
            const email = 'customer@example.com';
            const password = 'password';
            const expectedUrl = 'customer_home.html';

            // Act
            loginCustomer(email, password);

            // Assert
            expect(window.location.href).to.equal(expectedUrl);
        });

        it('should display an alert if email or password is incorrect', function () {
            // Arrange
            const email = 'invalid@example.com';
            const password = 'wrongpassword';

            // Spy on alert function
            const alertSpy = sinon.spy(window, 'alert');

            // Act
            loginCustomer(email, password);

            // Assert
            expect(alertSpy.calledWith('Invalid email or password')).to.be.true;

            // Restore original alert function
            alertSpy.restore();
        });
    });

    // Function to be tested
    function loginCustomer(email, password) {
        // Perform authentication logic for customer's email and password
        if (email === 'customer@example.com' && password === 'password') {
            // Redirect to customer's home page
            window.location.href = 'customer_home.html';
        } else {
            alert('Invalid email or password');
        }
    }
