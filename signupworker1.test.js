
        // Use jsdom to create a virtual DOM
        const { JSDOM } = jsdom;
        const dom = new JSDOM(`
        `);
        global.window = dom.window;
        global.document = dom.window.document;

        // Mocha setup
        mocha.setup('bdd');
        const expect = chai.expect;

        // Your tests go here
        describe('Registration Form', function () {
            it('should display worker fields when "Worker" is selected', function () {
                // Simulate selection of "Worker" option
                document.getElementById('userType').value = 'worker';
                // Trigger change event
                document.getElementById('userType').dispatchEvent(new Event('change'));
                
                // Assert worker fields are displayed
                expect(document.getElementById('workerFields').style.display).to.equal('block');
            });

            it('should display customer fields when "Customer" is selected', function () {
                // Simulate selection of "Customer" option
                document.getElementById('userType').value = 'customer';
                // Trigger change event
                document.getElementById('userType').dispatchEvent(new Event('change'));
                
                // Assert customer fields are displayed
                expect(document.getElementById('customerFields').style.display).to.equal('block');
            });
        });

        // Run the tests
        mocha.run();
   