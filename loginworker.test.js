// Import the function to be tested
const loginWorker = require('./loginWorker');

// Mocking window.location
delete window.location;
window.location = {
    href: ''
};

describe('Login Worker', () => {
    it('should redirect to worker home page if the worker code is correct', () => {
        // Arrange
        const workerCode = 'worker_code';

        // Act
        loginWorker(workerCode);

        // Assert
        expect(window.location.href).toEqual('worker_home.html');
    });

    it('should display an alert if the worker code is incorrect', () => {
        // Arrange
        const workerCode = 'incorrect_code';

        // Mock alert function
        window.alert = jest.fn();

        // Act
        loginWorker(workerCode);

        // Assert
        expect(window.alert).toHaveBeenCalledWith('Invalid worker code');
    });
});
