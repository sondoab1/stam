const { formatDate } = require("@angular/common");
document.addEventListener("DOMContentLoaded", function () {
    const eventsList = document.getElementById("events-list");

    function addEvent() {
        const titleInput = document.getElementById("title");
        const startInput = document.getElementById("start");
        const endInput = document.getElementById("end");
        const summaryInput = document.getElementById("summary");

        const title = titleInput.value;
        const start = startInput.value;
        const end = endInput.value;
        const summary = summaryInput.value;

        const startDate = new Date(start);
        const endDate = new Date(end);

        if (title && start && end && summary) {
            if (startDate <= endDate) {
                const newEvent = document.createElement("li");
                newEvent.classList.add("event");
                newEvent.setAttribute('data-title', title);
                newEvent.setAttribute('data-start', start);
                newEvent.setAttribute('data-end', end);
                newEvent.setAttribute('data-summary', summary);
                newEvent.innerHTML = `
                    <span class="event-title">${title}</span>
                    <span class="event-details">Date: ${formatDate(start)} | Summary: ${summary}</span>
                    <button class="delete-btn">Delete</button>
                `;
                eventsList.appendChild(newEvent);

                titleInput.value = "";
                startInput.value = "";
                endInput.value = "";
                summaryInput.value = "";
            } else {
                alert("Please ensure that the start date is before the end date.");
            }
        } else {
            alert("Please fill out all fields.");
        }
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    function deleteEvent(event) {
        const confirmation = confirm("Are you sure you want to delete this event?");
        if (confirmation) {
            event.target.parentElement.remove(); 
        }
    }

    document.getElementById("add-event").addEventListener("click", addEvent);

    eventsList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-btn")) {
            deleteEvent(event);
        }
    });
});
module.exports=deleteEvent()
module.exports=formatDate()
module.exports=addEvent()
