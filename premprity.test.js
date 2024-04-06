
        function applyDiscounts() {
            // Assuming some logic here to apply discounts

            // Display the success message
            document.getElementById('discountMessage').style.display = 'block';
        }

        // Unit test for applyDiscounts function
        function testApplyDiscounts() {
            // Simulate clicking the apply discounts button
            applyDiscounts();

            // Check if the discount message is displayed
            var discountMessage = document.getElementById('discountMessage');
            if (discountMessage.style.display === 'block') {
                return 'applyDiscounts function test: PASSED';
            } else {
                return 'applyDiscounts function test: FAILED';
            }
        }

        // Run the unit test
        document.getElementById('testResults').innerText = testApplyDiscounts();