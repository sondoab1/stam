let workers = [];
function addWorker() {
    const name = document.getElementById('name').value.trim();
    const familyName = document.getElementById('familyName').value.trim();
    const location = document.getElementById('location').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const salary = document.getElementById('salary').value.trim();
    const workerId = document.getElementById('workerId').value.trim();

    if (!name || !familyName || !location || !phone || !email || !salary || !workerId) {
        alert("Please fill in all fields");
        return;
    }

    if (!phone.startsWith('05')) {
        alert("Phone number must start with '05'");
        return;
    }

    if (!email.endsWith('@gmail.com')) {
        alert("Email must end with '@gmail.com'");
        return;
    }

    const worker = {
        name,
        familyName,
        location,
        phone,
        email,
        salary,
        workerId
    };

    workers.push(worker);
    displayWorkers();
    clearForm();
}
function deleteWorker(index) {
    workers.splice(index, 1);
    displayWorkers();
}
function displayWorkers() {
    const workerList = document.getElementById('worker-list');
    workerList.innerHTML = '';

    workers.forEach((worker, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${worker.name}</td>
            <td>${worker.familyName}</td>
            <td>${worker.location}</td>
            <td>${worker.phone}</td>
            <td>${worker.email}</td>
            <td>${worker.salary}</td>
            <td>${worker.workerId}</td>
            <td><button onclick="deleteWorker(${index})" class="delete">Delete</button></td>
        `;
        
        workerList.appendChild(row);
    });
}
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('familyName').value = '';
    document.getElementById('location').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('workerId').value = '';
}
window.onload = function() {
    const exampleWorkers = [
        {
            name: "John",
            familyName: "Doe",
            location: "New York",
            phone: "053-456-7890",
            email: "john@gmail.com",
            salary: "$5000",
            workerId: "12345"
        },
        {
            name: "Jane",
            familyName: "Smith",
            location: "Los Angeles",
            phone: "057-654-3210",
            email: "jane@gmail.com",
            salary: "$6000",
            workerId: "67890"
        }
    ];
    exampleWorkers.forEach(worker => {
        workers.push(worker);
    });
    displayWorkers();
};


window.addWorker=addWorker
window.deleteWorker=deleteWorker
window.displayWorkers=displayWorkers
window.clearForm=clearForm
window.initialize=initialize
