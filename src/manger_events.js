events = [];

function addEvent() {
    const workerName = document.getElementById('worker-name').value.trim();
    const workerLastName = document.getElementById('worker-last-name').value.trim();
    const eventTitle = document.getElementById('event-title').value.trim();
    const startDate = document.getElementById('start-date').value.trim();
    const endDate = document.getElementById('end-date').value.trim();
    const eventDescription = document.getElementById('event-description').value.trim();

    if (!workerName || !workerLastName || !eventTitle || !startDate || !endDate || !eventDescription) {
        alert("Please fill in all fields");
        return;
    }

    const newEvent = {
        workerName,
        workerLastName,
        eventTitle,
        startDate,
        endDate,
        eventDescription
    };

    events.push(newEvent);
    renderEvents();
    clearForm();
    location.reload();
}
function showEventDetails(index) {
    const event = events[index];
    alert(`Event Details:\nStart Date: ${event.startDate}\nEnd Date: ${event.endDate}\nDescription: ${event.eventDescription}`);
}

function deleteEvent(index) {
    events.splice(index, 1);
    renderEvents();
}

function renderEvents() {
    const upcomingEventsSection = document.querySelector('.upcoming-events');
    upcomingEventsSection.innerHTML = '';

    events.forEach((event, index) => {
        const eventHTML = `
            <div class="event" id="event-${index}">
                <h2>${event.workerName} ${event.workerLastName}: ${event.eventTitle}</h2>
                <p class="start-date">${event.startDate}</p>
                <span class="date-separator"> - </span>
                <p class="end-date">${event.endDate}</p>
                <p class="event-description">${event.eventDescription}</p>
                <button onclick="deleteEvent(${index})" class="delete-button">Delete</button>
            </div>
        `;
        upcomingEventsSection.insertAdjacentHTML('beforeend', eventHTML);
    });
}

function clearForm() {
    document.getElementById('worker-name').value = '';
    document.getElementById('worker-last-name').value = '';
    document.getElementById('event-title').value = '';
    document.getElementById('start-date').value = '';
    document.getElementById('end-date').value = '';
    document.getElementById('event-description').value = '';
}

window.onload = function () {
    const exampleEvents = [
        {
            workerName: "John",
            workerLastName: "Doe",
            eventTitle: "Storytelling for Kids",
            startDate: "2024-04-10",
            endDate: "2024-04-15",
            eventDescription: "Join us for an interactive storytelling session designed to ignite the imagination of young readers. Suitable for children aged 4-8."
        },
        {
            workerName: "Sarah",
            workerLastName: "Smith",
            eventTitle: "Book Club Meeting",
            startDate: "2024-04-20",
            endDate: "2024-04-22",
            eventDescription: "Come and discuss the latest bestseller with fellow book enthusiasts. Light refreshments will be served."
        }
    ];
    
    exampleEvents.forEach(event => {
        events.push(event);
    });
    
    renderEvents();
};
function showEventDetails(index) {
    const event = events[index];
    const startDate = new Date(event.startDate).toLocaleDateString();
    const endDate = new Date(event.endDate).toLocaleDateString();
    const summary = event.eventDescription;

    alert(`Event Details:\nStart Date: ${startDate}\nEnd Date: ${endDate}\nSummary: ${summary}`);
    const eventElement = document.getElementById(`event-${index}`);
    if (eventElement) {
        eventElement.scrollIntoView({ behavior: 'smooth' });
    }
}
module.exports = {
    addEvent,
    showEventDetails,
    deleteEvent,
    renderEvents,
    clearForm
}