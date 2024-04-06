const {
    addEvent,
    showEventDetails,
    deleteEvent,
    renderEvents,
    clearForm
} = require('./manger_events.js'); 

describe('Event Functions', () => {
    let events = [];

    beforeEach(() => {
        events = [];
    });

    test('Add event adds a new event to the events array', () => {
        
        document.getElementById = jest.fn().mockReturnValue({
            value: 'John',
            trim: () => 'John' 
        });
        
        window.alert = jest.fn();

       
        addEvent();
        expect(events.length).toBe(1);
        expect(events[0].workerName).toBe('John');
        expect(window.alert).not.toHaveBeenCalled();
    });

    test('Add event alerts when any field is empty', () => {
        document.getElementById = jest.fn().mockReturnValue({
            value: '', 
            trim: () => '' })
        window.alert = jest.fn();

        addEvent();

        expect(window.alert).toHaveBeenCalledWith('Please fill in all fields');
    });

    test('Show event details alerts with correct details', () => {
        const eventIndex = 0;
        const event = {
            workerName: 'John',
            workerLastName: 'Doe',
            eventTitle: 'Test Event',
            startDate: '2024-04-10',
            endDate: '2024-04-15',
            eventDescription: 'Test Description'
        };
        events.push(event);

        window.alert = jest.fn();

        showEventDetails(eventIndex);

        expect(window.alert).toHaveBeenCalledWith(`Event Details:\nStart Date: ${event.startDate}\nEnd Date: ${event.endDate}\nSummary: ${event.eventDescription}`);
    });

    test('Delete event removes event from events array', () => {
        const eventIndex = 0;
        const event = {
            workerName: 'John',
            workerLastName: 'Doe',
            eventTitle: 'Test Event',
            startDate: '2024-04-10',
            endDate: '2024-04-15',
            eventDescription: 'Test Description'
        };
        events.push(event);

        deleteEvent(eventIndex);
        expect(events.length).toBe(0);
    });

    test('Render events renders correct HTML', () => {
        const upcomingEventsSection = document.createElement('div');
        upcomingEventsSection.classList.add('upcoming-events');
        document.body.appendChild(upcomingEventsSection);

        renderEvents();

        expect(upcomingEventsSection.innerHTML).toMatchSnapshot();
    });

    test('Clear form clears all input fields', () => {
        document.getElementById = jest.fn().mockReturnValue({
            value: 'John',
        });

        clearForm();

        expect(document.getElementById('worker-name').value).toBe('');
        expect(document.getElementById('worker-last-name').value).toBe('');
        expect(document.getElementById('event-title').value).toBe('');
        expect(document.getElementById('start-date').value).toBe('');
        expect(document.getElementById('end-date').value).toBe('');
        expect(document.getElementById('event-description').value).toBe('');
    });
});
