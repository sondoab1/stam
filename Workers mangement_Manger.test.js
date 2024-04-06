const assert = require('assert');
const { addWorker, deleteWorker, displayWorkers, clearForm, initialize } = require('./Workers management_Manger');

describe('addWorker', () => {
    beforeEach(() => {
        workers = []; 
    });

    it('should add a worker to the list', () => {

        const worker = {
            name: 'John',
            familyName: 'Doe',
            location: 'New York',
            phone: '05-1234567',
            email: 'john@example.com',
            salary: '$5000',
            workerId: '12345'
        };

        addWorker(worker);

        expect(workers.length).to.equal(1);
        expect(workers[0]).to.deep.equal(worker);
    });

    it('should not add a worker if any field is missing', () => {
        
        const incompleteWorker = {
            name: 'Jane',
            familyName: 'Doe',
            location: 'Los Angeles',
           
        };

        addWorker(incompleteWorker);

        expect(workers.length).to.equal(0);
    });

    it('should not add a worker with invalid phone number', () => {
      
        const invalidPhoneWorker = {
            name: 'Jane',
            familyName: 'Doe',
            location: 'Los Angeles',
            phone: '123-456-7890', 
            email: 'jane@example.com',
            salary: '$6000',
            workerId: '67890'
        };

        addWorker(invalidPhoneWorker);

        expect(workers.length).to.equal(0);
    });

});

describe('deleteWorker', () => {
    beforeEach(() => {
        workers = [
            {
                name: 'John',
                familyName: 'Doe',
                location: 'New York',
                phone: '05-1234567',
                email: 'john@gmail.com',
                salary: '$5000',
                workerId: '12345'
            },
            {
                name: 'Jane',
                familyName: 'Doe',
                location: 'Los Angeles',
                phone: '05-7654321',
                email: 'jane@gmail.com',
                salary: '$6000',
                workerId: '67890'
            }
        ]; 
    });

    it('should delete a worker from the list', () => {
        const indexToDelete = 0;

        deleteWorker(indexToDelete);

        expect(workers.length).to.equal(1);
        expect(workers[0].name).to.not.equal('John');
    });

});

describe('displayWorkers', () => {
    beforeEach(() => {
        workers = [
            {
                name: 'John',
                familyName: 'Doe',
                location: 'New York',
                phone: '05-1234567',
                email: 'john@example.com',
                salary: '$5000',
                workerId: '12345'
            },
            {
                name: 'Jane',
                familyName: 'Doe',
                location: 'Los Angeles',
                phone: '05-7654321',
                email: 'jane@example.com',
                salary: '$6000',
                workerId: '67890'
            }
        ];
    });

    it('should display workers in the list', () => {
        const tableBody = document.createElement('tbody');
        tableBody.setAttribute('id', 'worker-list');
        document.body.appendChild(tableBody);

        displayWorkers();

        const workerRows = document.querySelectorAll('#worker-list tr');
        expect(workerRows.length).to.equal(workers.length);
    });

});

describe('clearForm', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <input type="text" id="name" value="John">
            <input type="text" id="familyName" value="Doe">
            <input type="text" id="location" value="New York">
            <input type="text" id="phone" value="05-1234567">
            <input type="text" id="email" value="john@example.com">
            <input type="text" id="salary" value="$5000">
            <input type="text" id="workerId" value="12345">
        `;
    });

    it('should clear all form inputs', () => {
        clearForm();

        expect(document.getElementById('name').value).to.equal('');
        expect(document.getElementById('familyName').value).to.equal('');
        expect(document.getElementById('location').value).to.equal('');
        expect(document.getElementById('phone').value).to.equal('');
        expect(document.getElementById('email').value).to.equal('');
        expect(document.getElementById('salary').value).to.equal('');
        expect(document.getElementById('workerId').value).to.equal('');
    });

    
});

describe('initialize'), () => {
    it('should initialize the workers array with example data', () => {
        
        initialize();

        expect(workers.length).to.equal(2);
        expect(workers[0].name).to.equal('John');
        expect(workers[1].name).to.equal('Jane');
    });
}
    