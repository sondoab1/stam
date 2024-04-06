// Function to create event HTML
function createEventHTML(event) {
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("event");
  
    let attended = false;
  
    eventDiv.innerHTML = `
      <h2>${event.name}</h2>
      <p><strong>Start Date:</strong> ${event.startDate}</p>
      <p><strong>End Date:</strong> ${event.endDate}</p>
      <p><strong>Summary:</strong> ${event.summary}</p>
      <p><strong>Location:</strong> ${event.location}</p>
      <button class="attend-button">${attended ? "Attended" : "Attend"}</button>
    `;
  
    const attendButton = eventDiv.querySelector(".attend-button");
    attendButton.addEventListener("click", function() {
      attended = !attended;
      attendButton.textContent = attended ? "Attended" : "Attend";
      if (attended) {
        attendButton.classList.add("attended");
      } else {
        attendButton.classList.remove("attended");
      }
    });
  
    return eventDiv;
  }
  
  function initializeEvents(eventsData, eventsContainer) {
    eventsData.forEach(event => {
      const eventDiv = createEventHTML(event);
      eventsContainer.appendChild(eventDiv);
    });
  }
  
  const eventsData = [
    {
      name: "Event 1",
      startDate: "2024-04-10",
      endDate: "2024-04-12",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Location 1"
    },
    {
      name: "Event 2",
      startDate: "2024-04-15",
      endDate: "2024-04-17",
      summary: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      location: "Location 2"
    }
  ];
  document.addEventListener("DOMContentLoaded", function() {
    const eventsContainer = document.getElementById("events");
    initializeEvents(eventsData, eventsContainer);
  });
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { createEventHTML, initializeEvents };
  }
  